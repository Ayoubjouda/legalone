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
interface FormProps {
  goToNext: () => void;
}
const DissolutionCompanyDataForm = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();

  return (
    <form className='max-w-[650px]'>
      <div className='my-5 flex flex-col  gap-4'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Informations sur votre société
        </p>
        <p className='text-center text-sm font-normal leading-tight text-slate-500'>
          Ces informations nous permettront de vous assister au cours de votre
          processus de création, et seront nécessaires pour constituer votre
          dossier.
        </p>

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
          className='self-end text-lg font-semibold hover:bg-darkRedish'
          type='button'
          size={'lg'}
          onClick={async () => {
            const isValid = await trigger(['companyName', 'rcs']);
            if (isValid) {
              goToNext();
            }
          }}
        >
          Continuer
        </Button>
      </div>
    </form>
  );
};
export default DissolutionCompanyDataForm;
