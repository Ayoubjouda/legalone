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
interface DissolutionAdminFormProps {
  dossier: DissolutionFormSchemaType;
}

const EditDissolutionForm: FC<DissolutionAdminFormProps> = ({ dossier }) => {
  const form = useForm<DissolutionFormSchemaType>({
    resolver: zodResolver(DissolutionFormSchema),
    defaultValues: {
      ...dossier,
    },
  });
  if (!dossier) return;
  const onSubmit = (data: DissolutionFormSchemaType) => {};
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

export default EditDissolutionForm;
