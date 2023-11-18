import { useGetActivity, useGetCompanyType } from '@/hooks/useCompany';
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

const CompanyTypeField = <T,>({ control }: EmailFieldProps<T>) => {
  const { data: CompanysType } = useGetCompanyType();

  return (
    <FormField
      control={control as Control<FieldValues>}
      name='companyType'
      render={({ field }) => (
        <FormItem className='grid-span-1'>
          <FormLabel>Company Type</FormLabel>
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
              {CompanysType?.map((company) => (
                <SelectItem
                  key={company.name}
                  value={company.name.toUpperCase()}
                >
                  {company.name.toUpperCase()}
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

export default CompanyTypeField;
