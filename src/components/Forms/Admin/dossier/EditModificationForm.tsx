import { FC } from 'react';
import { Dossier, FormalitiesResponse } from '@/types/order';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  DissolutionFormSchema,
  DissolutionFormSchemaType,
} from '@/lib/validators/fermeture/dissolution';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  UpdateFormSchemaType,
  UpdateFormSchema,
} from '@/lib/validators/modification/modification';
interface EditModificationFormProps {
  dossier: UpdateFormSchemaType;
}

const EditModificationForm: FC<EditModificationFormProps> = ({ dossier }) => {
  const form = useForm<UpdateFormSchemaType>({
    resolver: zodResolver(UpdateFormSchema),
    defaultValues: {
      ...dossier,
    },
  });
  if (!dossier) return;
  const onSubmit = (data: UpdateFormSchemaType) => {};
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

export default EditModificationForm;
