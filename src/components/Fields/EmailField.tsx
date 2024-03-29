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
  name: string;
  label: string;
}

const EmailField = <T,>({ control, name, label }: EmailFieldProps<T>) => {
  return (
    <FormField
      control={control as Control<FieldValues>}
      name={name}
      render={({ field }) => (
        <FormItem className='grid-span-1'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder='shadcn'
              type='email'
              {...field}
            />
          </FormControl>
          <FormDescription>
            This is your public display {label}.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default EmailField;
