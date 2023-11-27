import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../ui/form';
import { Input } from '../../../ui/input';
import { Button } from '../../../ui/button';
import { ChevronRight } from 'lucide-react';
interface FormProps {
  goToNext: () => void;
}
const Companyinfo = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();
  const handleGoToNext = async () => {
    const isValid = await trigger(['firstName', 'lastName', 'companyName']);
    if (isValid) {
      goToNext();
    }
  };
  return (
    <form className='max-w-[650px]'>
      <div className='my-5 flex flex-col  gap-4'>
        <div className='flex w-full gap-2 '>
          <FormField
            name='firstName'
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <FormItem className='w-1/2'>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name='lastName'
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <FormItem className='w-1/2'>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name='companyName'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de la société</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='self-end bg-black font-semibold hover:bg-black/80 '
          type='button'
          size={'sm'}
          onClick={handleGoToNext}
        >
          Continuer
          <ChevronRight size={16} />
        </Button>
      </div>
    </form>
  );
};
export default Companyinfo;
