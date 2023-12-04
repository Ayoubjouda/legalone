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
import { useUpdateEntrepriseFormality } from '@/hooks/useUpdate';
import {
  AutoEntreFormSchema,
  AutoEntreSchemaType,
} from '@/lib/validators/creation/autoEntreprise';
import { Dossier } from '@/types/order';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface EditAutoEntreSchemaType extends AutoEntreSchemaType {
  id: number;
}
interface EditSciFormProps {
  dossier: EditAutoEntreSchemaType;
  formalitie: Dossier;
}

const EditAutoEntreForm: FC<EditSciFormProps> = ({ dossier, formalitie }) => {
  const form = useForm<AutoEntreSchemaType>({
    resolver: zodResolver(AutoEntreFormSchema),
    defaultValues: {
      ...dossier,
    },
  });
  const { mutate: updateEntreprise } = useUpdateEntrepriseFormality();

  if (!dossier) return;
  const onSubmit = (data: AutoEntreSchemaType) => {
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
            <CompanyTypeField control={form.control} />

            <EmailField
              control={form.control}
              name='email'
              label='Email'
            />

            <TextField
              name='domicile'
              label='Domicile'
              control={form.control}
            />
            <NumberField
              name='postalCode'
              label='Code postal'
              control={form.control}
            />
            <NumberField
              name='city'
              label='Ville'
              control={form.control}
            />

            <PhoneField
              control={form.control}
              name='phone'
              label='Phone Number'
            />
            <ActivityField control={form.control} />
            <HeadQuarterField control={form.control} />

            {/* 
          
          <AssocierField control={form.control} />
          <LegalStateField control={form.control} />
          <ShareCapitalField control={form.control} />
          <RcsField control={form.control} />
          <AccountingExpertField control={form.control} /> */}
          </div>
          <div className='flex w-full flex-col'>
            <RadioField
              name='exAutoEntrepreneur'
              label='Avez vous déjà été auto-entrepreneur ?'
              values={[
                { value: 'true', label: 'Oui' },
                { value: 'false', label: 'Non' },
              ]}
            />
            <RadioField
              name='artisan'
              label='Votre activité est-elle artisanale ?'
              values={[
                { value: 'true', label: 'Oui' },
                { value: 'false', label: 'Non' },
              ]}
            />
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
