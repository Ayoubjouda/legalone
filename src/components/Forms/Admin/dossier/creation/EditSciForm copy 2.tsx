import { Button } from '@/components/ui/button';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  useGetActivity,
  useGetCompanyType,
  useGetHeadQuarter,
} from '@/hooks/useCompany';
import { SciFormSchema, SciSchemaType } from '@/lib/validators/creation/sci';
import { FormalitiesResponse } from '@/types/order';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
interface EditSciFormProps {
  dossier: SciSchemaType;
}

const EditSciForm: FC<EditSciFormProps> = ({ dossier }) => {
  const form = useForm<SciSchemaType>({
    resolver: zodResolver(SciFormSchema),
    defaultValues: {
      ...dossier,
    },
  });

  if (!dossier) return;
  const onSubmit = (data: SciSchemaType) => {};
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

export default EditSciForm;
