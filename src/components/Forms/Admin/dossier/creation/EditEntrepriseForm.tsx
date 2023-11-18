import TextField from '@/components/Fields/TextField';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  EntrepriseFormSchema,
  EntrepriseSchemaType,
} from '@/lib/validators/creation/entreprise';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
interface EditEntrepriseFormProps {
  dossier: EntrepriseSchemaType;
}

const EditEntrepriseForm: FC<EditEntrepriseFormProps> = ({ dossier }) => {
  const form = useForm<EntrepriseSchemaType>({
    resolver: zodResolver(EntrepriseFormSchema),
    defaultValues: {
      ...dossier,
    },
  });

  if (!dossier) return;
  const onSubmit = (data: EntrepriseSchemaType) => {};
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid grid-cols-2 gap-4 '
        >
          <TextField
            control={form.control}
            name='companyName'
            label='Company Name'
          />
          {/* <CompanyNameField control={form.control} />
          <CompanyTypeField control={form.control} />
          <DelayField control={form.control} />
          <ActivityField control={form.control} />
          <FirstNameField control={form.control} />
          <LastNameField control={form.control} />
          <SexField control={form.control} />
          <EmailField control={form.control} />
          <PhoneField control={form.control} />
          <AssocierField control={form.control} />
          <LegalStateField control={form.control} />
          <ShareCapitalField control={form.control} />
          <HeadQuarterField control={form.control} />
          <RcsField control={form.control} />
          <AccountingExpertField control={form.control} /> */}

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

export default EditEntrepriseForm;
