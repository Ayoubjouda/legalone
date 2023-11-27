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
import { Textarea } from '../ui/textarea';
interface TextFieldProps<T> {
  control?: T;
  name: string;
  label: string;
}

const TextAreaField = <T,>({ control, label, name }: TextFieldProps<T>) => {
  return (
    <FormField
      control={control as Control<FieldValues>}
      name={name}
      render={({ field }) => (
        <FormItem className='grid-span-1'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder='shadcn'
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

export default TextAreaField;
