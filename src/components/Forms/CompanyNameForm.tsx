import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { ChevronRight } from 'lucide-react';
interface FormProps {
  goToNext: () => void;
}
const CompanyNameForm = ({ goToNext }: FormProps) => {
  const { control, trigger, getValues } = useFormContext();
  const values = getValues();

  return (
    <form className='max-w-[650px]'>
      <div className='my-5 flex flex-col  gap-4'>
        <p className='text-center text-sm font-normal leading-tight text-slate-500'>
          Ces informations nous permettront de vous assister au cours de votre
          processus de création, et seront nécessaires pour constituer votre
          dossier.
        </p>

        <FormField
          name='companyName'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de la société à domicilier</FormLabel>
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
          onClick={async () => {
            const isValid = await trigger(['companyName']);
            if (isValid) {
              goToNext();
            }
          }}
        >
          Continuer
          <ChevronRight size={16} />
        </Button>
      </div>
    </form>
  );
};
export default CompanyNameForm;
