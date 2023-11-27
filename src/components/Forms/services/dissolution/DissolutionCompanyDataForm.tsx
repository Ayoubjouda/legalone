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
const DissolutionCompanyDataForm = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();
  const handleGoToNext = async () => {
    const isValid = await trigger(['companyName', 'rcs']);
    if (isValid) {
      goToNext();
    }
  };
  return (
    <form className='w-full max-w-[650px]'>
      <div className='my-5 flex flex-col  gap-4'>
        <FormField
          name='companyName'
          control={control}
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
        <FormField
          name='rcs'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro RCS(SIREN)</FormLabel>
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
export default DissolutionCompanyDataForm;
