import { Control, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface Value {
  value: string;
  label: string;
}

interface EmailFieldProps<T> {
  control?: T;
  name: string;
  label: string;
  values: Value[];
}

const SelectField = <T,>({
  control,
  name,
  label,
  values,
}: EmailFieldProps<T>) => {
  return (
    <FormField
      control={control as Control<FieldValues>}
      name={name}
      render={({ field }) => (
        <FormItem className='grid-span-1'>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue defaultValue={field.value} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {values.map((value) => (
                <SelectItem
                  key={value.label}
                  value={value.value}
                >
                  {value.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>
            This is your public display {label}.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
