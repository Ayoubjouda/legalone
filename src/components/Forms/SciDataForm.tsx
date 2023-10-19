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
import { MoveRight } from 'lucide-react';

interface FormProps {
  goToNext: () => void;
}
const SciDataForm = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();
  return (
    <form className='w-full max-w-[650px]'>
      <div className=' flex flex-col gap-4'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          information complementaire sur votre SCI
        </p>

        <div className='flex flex-col gap-8'>
          <FormField
            name='sciActivityField'
            control={control}
            render={({ field }) => (
              <FormItem className='flex flex-col  gap-3 space-y-0 '>
                <FormLabel className='leading-[20px]'>
                  Quelle sera l'activité principale de la société ?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-col'
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='one' />
                      </FormControl>
                      <FormLabel className='font-semibold'>
                        La mise en SCI du patrimoine immobilier familial pour y
                        résider, sans activité de location
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex  space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='many' />
                      </FormControl>
                      <FormLabel className='font-semibold'>
                        La mise en location de ses biens immobiliers
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name='taxRegime'
            control={control}
            render={({ field }) => (
              <FormItem className='flex flex-col gap-3 space-y-0 '>
                <FormLabel className='leading-[20px]'>
                  Quel sera le régime d'imposition fiscale des bénéfices ?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-col'
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='one' />
                      </FormControl>
                      <FormLabel className='font-semibold'>
                        Impôts sur le revenu
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='many' />
                      </FormControl>
                      <FormLabel className='font-semibold'>
                        Impôts sur les sociétés
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='many' />
                      </FormControl>
                      <FormLabel className='font-semibold'>
                        Je ne sais pas
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          className='flex items-center gap-2 self-end text-base font-semibold  hover:bg-darkRedish'
          type='button'
          size={'lg'}
          onClick={async () => {
            const isValid = await trigger(['taxRegime', 'sciActivityField']);
            if (isValid) {
              goToNext();
            }
          }}
        >
          <span></span>
          Continuer
          <MoveRight />
        </Button>
      </div>
    </form>
  );
};
export default SciDataForm;
