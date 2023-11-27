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
import { ChevronRight } from 'lucide-react';
interface FormProps {
  goToNext: () => void;
}
const DeclarationForm = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();
  const handleGoToNext = async () => {
    const isValid = await trigger(['declaration']);
    if (isValid) {
      goToNext();
    }
  };
  return (
    <form className='max-w-[650px]'>
      <div className='my-5 flex flex-col  gap-4'>
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
export default DeclarationForm;
