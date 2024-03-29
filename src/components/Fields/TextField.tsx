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
import { cn } from '@/lib/utils';
interface TextFieldProps<T> {
  control?: T;
  name: string;
  label: string;
  className?: string;
}

const TextField = <T,>({
  control,
  label,
  name,
  className,
}: TextFieldProps<T>) => {
  return (
    <FormField
      control={control as Control<FieldValues>}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('grid-span-1', className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
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

export default TextField;
