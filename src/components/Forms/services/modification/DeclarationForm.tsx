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
import { RadioGroup, RadioGroupItem } from '../../../ui/radio-group';
interface FormProps {
  goToNext: () => void;
}
const DeclarationForm = ({ goToNext }: FormProps) => {
  const { control, trigger, getValues } = useFormContext();
  const values = getValues();

  return (
    <form className='max-w-[650px]'>
      <div className='my-5 flex flex-col  gap-4'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Bénéficiaires Effectifs
        </p>
        <p className='text-center text-sm font-normal leading-tight text-slate-500'>
          Ces informations nous permettront de vous assister au cours de votre
          processus de création, et seront nécessaires pour constituer votre
          dossier.
        </p>

        <FormField
          name='declaration'
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormItem className='flex flex-col gap-3 space-y-0 '>
              <FormLabel className='leading-[20px]'>
                Avez-vous déjà effectué la Déclaration de Bénéficiaires
                Effectifs de votre société ?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    if (value === 'True') {
                      onChange(true);
                    } else if (value === 'False') {
                      onChange(false);
                    }
                  }}
                  defaultValue={
                    value === true ? 'True' : value === false ? 'False' : ''
                  }
                  className='flex'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='True' />
                    </FormControl>
                    <FormLabel className='font-semibold'>Oui</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='False' />
                    </FormControl>
                    <FormLabel className='font-semibold'>Non</FormLabel>
                  </FormItem>
                </RadioGroup>
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
            const isValid = await trigger(['declaration']);
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
export default DeclarationForm;
