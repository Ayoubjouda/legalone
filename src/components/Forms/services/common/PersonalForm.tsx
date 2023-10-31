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
const PersonalForm = ({ goToNext }: FormProps) => {
  const { control, trigger, getValues } = useFormContext();
  const values = getValues();

  if (values.managerType === 2)
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
            name='raisonSocial'
            defaultValue={''}
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Raison social</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name='legalState'
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Forme juridique de la Société</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name='Rcs'
            defaultValue={''}
            control={control}
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
            onClick={async () => {
              const isValid = await trigger([
                'legalState',
                'Rcs',
                'raisonSocial',
              ]);
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
  return (
    <form className='max-w-[650px]'>
      <div className='my-5 flex flex-col  gap-4'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Informations personnelles
        </p>
        <p className='text-center text-sm font-normal leading-tight text-slate-500'>
          Ces informations nous permettront de vous assister au cours de votre
          processus de création, et seront nécessaires pour constituer votre
          dossier.
        </p>

        <div className='flex w-full gap-2 '>
          <FormField
            name='firstName'
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <FormItem className='w-1/2'>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name='lastName'
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <FormItem className='w-1/2'>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name='sexManager'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem className='flex items-center gap-3 space-y-0 '>
              <FormLabel className='leading-[20px]'>
                Sélectionnez votre sexe :
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Male' />
                    </FormControl>
                    <FormLabel className='font-semibold'>Male</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Female' />
                    </FormControl>
                    <FormLabel className='font-semibold'>Female</FormLabel>
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
          onClick={async () => {
            const isValid = await trigger([
              'firstName',
              'lastName',
              'sexManager',
            ]);
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
export default PersonalForm;
