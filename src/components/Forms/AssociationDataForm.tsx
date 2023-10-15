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
import { Textarea } from '../ui/textarea';
interface FormProps {
  goToNext: () => void;
}
const AssociationDataForm = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();
  return (
    <form className='w-full max-w-[650px]'>
      <div className=' flex flex-col gap-4'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          information complementaire sur votre Association
        </p>
        <FormField
          name='companyName'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de votre association</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='descriptionAssociation'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quelle est l'activité de l'association ?</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='desktopComposition'
          control={control}
          defaultValue={'one'}
          render={({ field }) => (
            <FormItem className='flex items-center gap-3 space-y-0 '>
              <FormLabel className='leading-[20px]'>
                De combien de membres sera composé le bureau ?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='one' />
                    </FormControl>
                    <FormLabel className='font-semibold'>
                      Un président et un trésorier (le plus fréquent)
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='many' />
                    </FormControl>
                    <FormLabel className='font-semibold'>
                      Un président, un trésorier et un secrétaire
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className='flex items-center gap-2 self-end text-base font-semibold  hover:bg-darkRedish'
          type='button'
          size={'lg'}
          onClick={async () => {
            const isValid = await trigger([
              'companyName',
              'desktopComposition',
              'descriptionAssociation',
            ]);
            console.log(isValid);
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
export default AssociationDataForm;
