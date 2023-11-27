import { Controller, useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../../ui/form';
import { Input } from '../../../../ui/input';
import { RadioGroup, RadioGroupItem } from '../../../../ui/radio-group';
import { Button } from '../../../../ui/button';
import { ChevronRight, MoveRight } from 'lucide-react';

interface FormProps {
  goToNext: () => void;
}
const AutoEntreForm = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();
  const handleGoToNext = async () => {
    const isValid = await trigger([
      'activity',
      'adresse',
      'codePostal',
      'ville',
      'exAutoEntrepreneur',
    ]);
    console.log(isValid);
    if (isValid) {
      goToNext();
    }
  };
  return (
    <form className='w-full max-w-[650px]'>
      <div className=' flex flex-col gap-4'>
        <div className='hidden'>
          <Controller
            name='managerType'
            control={control}
            defaultValue={1}
            render={({ field }) => (
              <input
                {...field}
                defaultValue={1}
              />
            )}
            rules={{ required: true }}
          />
        </div>

        <FormField
          name='activity'
          control={control}
          defaultValue={1}
          render={({ field }) => (
            <FormItem className='hidden'>
              <FormLabel>Adresse de votre domicile</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='adresse'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse de votre domicile</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='codePostal'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code Postal</FormLabel>
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
          name='ville'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ville</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='exAutoEntrepreneur'
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormItem className='flex items-center gap-3 space-y-0 '>
              <FormLabel className='leading-[20px]'>
                Avez vous déjà été auto-entrepreneur ?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    if (value === 'True') {
                      onChange(true);
                    } else {
                      onChange(false);
                    }
                  }}
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
        <FormField
          name='artisan'
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormItem className='flex items-center gap-3 space-y-0 '>
              <FormLabel className='leading-[20px]'>
                Votre activité est-elle artisanale ?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    if (value === 'True') {
                      onChange(true);
                    } else {
                      onChange(false);
                    }
                  }}
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
export default AutoEntreForm;
