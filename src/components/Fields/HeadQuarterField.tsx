'use client';
import {
  useGetActivity,
  useGetCompanyType,
  useGetHeadQuarter,
} from '@/hooks/useCompany';
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
import { useState } from 'react';
interface EmailFieldProps<T> {
  control?: T;
}

const HeadQuarterField = <T,>({ control }: EmailFieldProps<T>) => {
  const { data: headquarters } = useGetHeadQuarter();
  const [ddd, setddd] = useState<boolean>();

  return (
    <FormField
      control={control as Control<FieldValues>}
      name='headquarter'
      render={({ field }) => (
        <FormItem className='grid-span-1'>
          <FormLabel>headquarter</FormLabel>
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
              {headquarters?.map((hq) => (
                <SelectItem
                  key={hq.headquarter}
                  value={hq.headquarter.toUpperCase()}
                >
                  {hq.headquarter.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default HeadQuarterField;
