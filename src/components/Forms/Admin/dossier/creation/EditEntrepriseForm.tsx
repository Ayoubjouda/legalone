import {
  ActivityField,
  EmailField,
  HeadQuarterField,
  NumberField,
  PhoneField,
  RadioField,
  SelectField,
} from '@/components/Fields';
import CompanyTypeField from '@/components/Fields/CompanyTypeField';
import TextField from '@/components/Fields/TextField';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useUpdateEntrepriseFormality } from '@/hooks/useUpdate';
import {
  EntrepriseFormSchema,
  EntrepriseSchemaType,
} from '@/lib/validators/creation/entreprise';
import { Dossier } from '@/types/order';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface EditEntrepriseSchemaType extends EntrepriseSchemaType {
  id: number;
}

interface EditEntrepriseFormProps {
  dossier: EditEntrepriseSchemaType;
  formalitie: Dossier;
}

const EditEntrepriseForm: FC<EditEntrepriseFormProps> = ({
  dossier,
  formalitie,
}) => {
  const form = useForm<EntrepriseSchemaType>({
    resolver: zodResolver(EntrepriseFormSchema),
    defaultValues: {
      ...dossier,
    },
  });
  const { mutate: updateEntreprise } = useUpdateEntrepriseFormality();

  if (!dossier) return;
  const values = form.getValues();
  console.log(values);
  const onSubmit = (data: EntrepriseSchemaType) => {
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
          className='space-y-4'
        >
          <div className='grid grid-cols-2 gap-4 '>
            <TextField
              control={form.control}
              name='companyName'
              label='Company Name'
            />
            <CompanyTypeField control={form.control} />

            <EmailField
              control={form.control}
              name='email'
              label='Email'
            />
            {dossier.managerType === 1 ? (
              <>
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
              </>
            ) : (
              <>
                <TextField
                  control={form.control}
                  name='raisonSocial'
                  label='Raison social'
                />
                <TextField
                  control={form.control}
                  name='Rcs'
                  label='RCS'
                />
                <TextField
                  control={form.control}
                  name='legalState'
                  label='Forme juridique de la Société'
                />
              </>
            )}

            <PhoneField
              control={form.control}
              name='phone'
              label='Phone Number'
            />
            <ActivityField control={form.control} />
            <HeadQuarterField control={form.control} />
            <NumberField
              control={form.control}
              name='shareCapital'
              label='Capital'
            />
            <SelectField
              control={form.control}
              name='associer'
              label='Associer'
              values={[
                {
                  value: 'one',
                  label: 'One',
                },
                {
                  value: 'many',
                  label: 'Many',
                },
              ]}
            />
            <RadioField
              control={form.control}
              values={[
                {
                  value: 'true',
                  label: 'Oui',
                },
                {
                  value: 'false',
                  label: 'Non',
                },
              ]}
              name='nonAssociateManager'
              label='Le Président est-il Associé fondateur de la Société ?'
            />
            <RadioField
              control={form.control}
              values={[
                {
                  value: 'true',
                  label: 'Oui',
                },
                {
                  value: 'false',
                  label: 'Non',
                },
              ]}
              name='accountingExpert'
              label='Avez-vous déjà mandaté un expert comptable pour effectuer votre comptabilité annuelle ?'
            />
          </div>
          <Button
            className='grid-span-2'
            type='submit'
          >
            Sauvgarder
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditEntrepriseForm;
