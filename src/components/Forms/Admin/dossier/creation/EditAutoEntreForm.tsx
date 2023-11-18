import {
  ActivityField,
  CompanyTypeField,
  EmailField,
  HeadQuarterField,
  NumberField,
  PhoneField,
  RadioField,
  SelectField,
  TextField,
} from '@/components/Fields';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  AutoEntreFormSchema,
  AutoEntreSchemaType,
} from '@/lib/validators/creation/autoEntreprise';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
interface EditSciFormProps {
  dossier: AutoEntreSchemaType;
}

const EditAutoEntreForm: FC<EditSciFormProps> = ({ dossier }) => {
  const form = useForm<AutoEntreSchemaType>({
    resolver: zodResolver(AutoEntreFormSchema),
    defaultValues: {
      ...dossier,
    },
  });

  if (!dossier) return;
  const onSubmit = (data: AutoEntreSchemaType) => {};
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

            {/* 
          
          <AssocierField control={form.control} />
          <LegalStateField control={form.control} />
          <ShareCapitalField control={form.control} />
          <RcsField control={form.control} />
          <AccountingExpertField control={form.control} /> */}
          </div>
          <Button
            className='grid-span-2'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditAutoEntreForm;
