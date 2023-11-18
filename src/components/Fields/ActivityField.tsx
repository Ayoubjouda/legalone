import { useGetActivity } from '@/hooks/useCompany';
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

const ActivityField = <T,>({ control }: EmailFieldProps<T>) => {
  const { data: Activitys } = useGetActivity();

  return (
    <FormField
      control={control as Control<FieldValues>}
      name='activity'
      render={({ field }) => (
        <FormItem className='grid-span-1'>
          <FormLabel>Activity</FormLabel>
          <Select onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger>
                <SelectValue defaultValue={field.value} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Activitys?.map((activity) => (
                <SelectItem
                  key={activity.name}
                  value={activity.name.toUpperCase()}
                >
                  {activity.name.toUpperCase()}
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

export default ActivityField;
