import { Control, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
interface NumberFieldProps<T> {
  control?: T;
  name: string;
  label: string;
}

const NumberField = <T,>({ control, label, name }: NumberFieldProps<T>) => {
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
              type='number'
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

export default NumberField;
