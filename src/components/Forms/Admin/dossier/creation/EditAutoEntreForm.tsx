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
          className='grid grid-cols-2 gap-4 '
        >
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
