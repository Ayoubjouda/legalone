import {
  ActivityField,
  CompanyTypeField,
  EmailField,
  HeadQuarterField,
  PhoneField,
  RadioField,
  SelectField,
  TextField,
} from '@/components/Fields';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useUpdateEntrepriseFormality } from '@/hooks/useUpdate';
import {
  AssociationFormSchema,
  AssociationSchemaType,
} from '@/lib/validators/creation/association';
import { Dossier } from '@/types/order';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface EditAssosiationSchemaType extends AssociationSchemaType {
  id: number;
}
interface EditAssociationFormProps {
  dossier: EditAssosiationSchemaType;
  formalitie: Dossier;
}

const EditAssociation: FC<EditAssociationFormProps> = ({
  dossier,
  formalitie,
}) => {
  const form = useForm<AssociationSchemaType>({
    resolver: zodResolver(AssociationFormSchema),
    defaultValues: {
      ...dossier,
    },
  });
  const { mutate: updateEntreprise } = useUpdateEntrepriseFormality();

  if (!dossier) return;
  const onSubmit = (data: AssociationSchemaType) => {
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
          className='space-y-10'
        >
          <div className='grid grid-cols-2 gap-4 '>
            <TextField
              control={form.control}
              name='companyName'
              label="Nom de  l'association"
            />
            <CompanyTypeField control={form.control} />

            <EmailField
              control={form.control}
              name='email'
              label='Email'
            />
            <TextField
              control={form.control}
              name='firstName'
              label='First Name'
            />
            <TextField
              control={form.control}
              name='lastName'
              label='Last name'
            />
            <SelectField
              control={form.control}
              name='sex'
              label='le sexe'
              values={[
                {
                  value: 'Male',
                  label: 'Male',
                },
                {
                  value: 'Female',
                  label: 'Female',
                },
              ]}
            />

            <PhoneField
              control={form.control}
              name='phone'
              label='Phone Number'
            />
            <ActivityField control={form.control} />
            <HeadQuarterField control={form.control} />
            <TextField
              control={form.control}
              name='descriptionAssociation'
              label="Quelle est l'activité de l'association ?"
            />
            <RadioField
              values={[
                {
                  value: 'one',
                  label: 'Un président et un trésorier (le plus fréquent)',
                },
                {
                  value: 'many',
                  label: 'Un président, un trésorier et un secrétaire',
                },
              ]}
              name='desktopComposition'
              label='De combien de membres sera composé le bureau ?'
            />
            <TextField
              control={form.control}
              name='tresorierFirstName'
              label='Prenom du tresorier'
            />
            <TextField
              control={form.control}
              name='tresorierLastName'
              label='Nom du tresorier'
            />
            <SelectField
              control={form.control}
              name='tresorierSex'
              label='le sexe du tresorier'
              values={[
                {
                  value: 'Male',
                  label: 'Male',
                },
                {
                  value: 'Female',
                  label: 'Female',
                },
              ]}
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

export default EditAssociation;
