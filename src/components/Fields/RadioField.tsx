import { Control, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
interface Values {
  value: string;
  label: string;
}
interface RadioFieldProps<T> {
  control?: T;
  label: string;
  name: string;
  values: Values[];
}

const RadioField = <T,>({
  control,
  label,
  name,
  values,
}: RadioFieldProps<T>) => {
  return (
    <FormField
      control={control as Control<FieldValues>}
      name={name}
      render={({ field }) => (
        <FormItem className='space-y-3'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={String(field.value)}
              className='flex flex-col space-y-1'
            >
              {values.map((value) => (
                <FormItem
                  key={value.label}
                  className='flex items-center space-x-3 space-y-0'
                >
                  <FormControl>
                    <RadioGroupItem value={value.value} />
                  </FormControl>
                  <FormLabel className='font-normal'>{value.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RadioField;
