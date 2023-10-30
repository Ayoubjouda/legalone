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
import { el } from 'date-fns/locale';

interface FormProps {
  goToNext: () => void;
}
const CompanyDataForm = ({ goToNext }: FormProps) => {
  const { control, trigger, watch } = useFormContext();
  const field = watch();
  const handleGoToNext = async () => {
    const isValid = await trigger([
      'companyName',
      'assosier',
      'shareCapital',
      'accountingExpert',
      'nonAssociateManager',
    ]);
    console.log(field);
    if (isValid) {
      goToNext();
    }
  };

  return (
    <form className='w-full max-w-[650px]'>
      <div className=' flex flex-col gap-4'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          information complementaire sur votre société
        </p>
        <FormField
          name='companyName'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de la Societé</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='shareCapital'
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Capital social</FormLabel>
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
          name='associer'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem className='flex items-center gap-3 space-y-0 '>
              <FormLabel className='leading-[20px]'>
                Combien y a-t-il d'Associés fondateurs ?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(val) => field.onChange(val)}
                  defaultValue={
                    field.value === 'one'
                      ? 'one'
                      : field.value === 'many'
                      ? 'many'
                      : ''
                  }
                  className='flex'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='one' />
                    </FormControl>
                    <FormLabel className='font-semibold'>Un seul</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='many' />
                    </FormControl>
                    <FormLabel className='font-semibold'>Plusieurs</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='accountingExpert'
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormItem className='flex items-center gap-3 space-y-0 '>
              <FormLabel className='leading-[20px]'>
                Avez-vous déjà mandaté un expert comptable pour effectuer votre
                comptabilité annuelle ?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(val) => {
                    if (val === 'True') {
                      onChange(true);
                    } else if (val === 'False') {
                      onChange(false);
                    }
                  }}
                  className='flex'
                  defaultValue={
                    value === true ? 'True' : value === false ? 'False' : ''
                  }
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
        <FormField
          name='nonAssociateManager'
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <FormItem className='flex items-center gap-3 space-y-0 '>
              <FormLabel className='leading-[20px]'>
                Le Président est-il Associé fondateur de la Société ?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(val) => {
                    if (val === 'True') {
                      onChange(true);
                    } else if (val === 'False') {
                      onChange(false);
                    }
                  }}
                  className='flex'
                  defaultValue={
                    value === true ? 'True' : value === false ? 'False' : ''
                  }
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
export default CompanyDataForm;
