import {
  CompanyTypeField,
  EmailField,
  NumberField,
  SelectField,
  TextField,
} from '@/components/Fields';
import TextAreaField from '@/components/Fields/TextAreaField';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  useUpdateEntrepriseFormality,
  useUpdateModificationFormality,
} from '@/hooks/useUpdate';
import {
  UpdateFormSchema,
  UpdateFormSchemaType,
} from '@/lib/validators/modification/modification';
import { Dossier } from '@/types/order';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
interface EditUpdateSchemaType extends UpdateFormSchemaType {
  id: number;
}
interface EditModificationFormProps {
  dossier: EditUpdateSchemaType;
  formalitie: Dossier;
}

const modifications = [
  {
    id: '1',
    label: "Changer l'adresse du siège social",
  },
  {
    id: '2',
    label: 'Changer un ou plusieurs dirigeants',
  },
  {
    id: '3',
    label: "Changer l'activité de la société",
  },
  {
    id: '4',
    label: "Faire une cession d'actions",
  },
  {
    id: '5',
    label: 'Modifier le nom de la société',
  },
  {
    id: '6',
    label: 'Modifier la durée de la société',
  },
  {
    id: '7',
    label:
      "Déclarer un changement de situation d'un ou plusieurs dirigeants (ex: changement de domicile, modification du nom)",
  },
];

const EditModificationForm: FC<EditModificationFormProps> = ({
  dossier,
  formalitie,
}) => {
  const form = useForm<UpdateFormSchemaType>({
    resolver: zodResolver(UpdateFormSchema),
    defaultValues: {
      ...dossier,
    },
  });
  const { mutate: updateEntreprise } = useUpdateModificationFormality();
  if (!dossier) return;
  const onSubmit = (data: UpdateFormSchemaType) => {
    updateEntreprise({
      companyId: dossier.id,
      dossierId: formalitie.formalityId,
      formalities: { ...formalitie, data: data },
    });
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-10 '
        >
          <div className='grid grid-cols-2 gap-4 '>
            <TextField
              name='companyName'
              label='Company Name'
              control={form.control}
            />
            <TextField
              name='lastName'
              label='Nom'
              control={form.control}
            />
            <TextField
              name='firstName'
              label='prenom'
              control={form.control}
            />
            <TextField
              name='phone'
              label='Phone'
              control={form.control}
            />
            <CompanyTypeField control={form.control} />
            <EmailField
              name='email'
              label='Email'
              control={form.control}
            />
            <SelectField
              name='delay'
              label='Delay'
              control={form.control}
              values={[
                {
                  value: 'weekly',
                  label: 'weekly',
                },
                {
                  value: 'monthly',
                  label: 'monthly',
                },
                {
                  value: 'je ne sais pas',
                  label: 'je ne sais pas',
                },
              ]}
            />
            <TextAreaField
              name='otherModification'
              label='Autres modifications souhaitées'
              control={form.control}
            />
            <FormField
              control={form.control}
              name='modification'
              render={() => (
                <FormItem>
                  <div className='mb-4'>
                    <FormLabel className='text-base'>
                      Quelles sont les modifications que vous souhaitez
                      effectuer ?
                    </FormLabel>
                  </div>
                  {modifications.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name='modification'
                      defaultValue={[]}
                      render={({ field: { value, onChange } }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className='flex flex-row items-start space-x-3 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                checked={value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? onChange([...value, item.id])
                                    : onChange(
                                        value?.filter(
                                          (val: string) => val !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className='w-full'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditModificationForm;
