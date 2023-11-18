import { FC } from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Control, FieldValues } from 'react-hook-form';
import { Input } from '../ui/input';
import { EntrepriseSchemaType } from '@/lib/validators/creation/entreprise';
import { AssociationSchemaType } from '@/lib/validators/creation/association';
import { DissolutionFormSchemaType } from '@/lib/validators/fermeture/dissolution';
interface EmailFieldProps<T> {
  control?: T;
}

const EmailField = <T,>({ control }: EmailFieldProps<T>) => {
  return (
    <FormField
      control={control as Control<FieldValues>}
      name='email'
      render={({ field }) => (
        <FormItem className='grid-span-1'>
          <FormLabel>email</FormLabel>
          <FormControl>
            <Input
              placeholder='shadcn'
              type='email'
              {...field}
            />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default EmailField;
