import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  AssociationFormSchema,
  AssociationSchemaType,
} from '@/lib/validators/creation/association';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
interface EditAssociationFormProps {
  dossier: AssociationSchemaType;
}

const EditAssociation: FC<EditAssociationFormProps> = ({ dossier }) => {
  const form = useForm<AssociationSchemaType>({
    resolver: zodResolver(AssociationFormSchema),
    defaultValues: {
      ...dossier,
    },
  });

  if (!dossier) return;
  const onSubmit = (data: AssociationSchemaType) => {};
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

export default EditAssociation;
