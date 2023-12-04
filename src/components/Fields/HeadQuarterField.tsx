'use client';
import { useGetHeadQuarter } from '@/hooks/useCompany';
import { useState } from 'react';
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
interface EmailFieldProps<T> {
  control?: T;
}

const HeadQuarterField = <T,>({ control }: EmailFieldProps<T>) => {
  const { data: headquarters } = useGetHeadQuarter();
  const handleHeadQuarter = (id: number) => {
    const selectedHQ = headquarters
      ?.find((hq) => hq.id === id)
      ?.headquarter.toUpperCase();
    return selectedHQ;
  };

  return (
    <FormField
      control={control as Control<FieldValues>}
      name='headquarter'
      render={({ field }) => (
        <FormItem className='grid-span-1'>
          <FormLabel>headquarter</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={String(field.value)}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue defaultValue={String(field.value)} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {headquarters?.map((hq) => (
                <SelectItem
                  key={hq.headquarter}
                  value={String(hq.id)}
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
