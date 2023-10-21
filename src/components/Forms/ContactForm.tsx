import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import { ChevronRight, MoveRight } from 'lucide-react';

interface FormProps {
  goToNext: () => void;
}
const ContactForm = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();
  const handleGoToNext = async () => {
    const isValid = await trigger(['phone', 'email']);
    if (isValid) {
      goToNext();
    }
  };
  return (
    <form className='w-full max-w-[650px]'>
      <div className=' flex flex-col gap-4'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Email & numero de telephone
        </p>
        <FormField
          name='phone'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numero de telephone</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='number'
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='email'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
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
export default ContactForm;
