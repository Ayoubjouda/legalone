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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../../ui/select';
import { useGetCompanyType } from '@/hooks/useCompany';
import { Spinner } from '@chakra-ui/react';
interface FormProps {
  goToNext: () => void;
}
const DissolutionLiquidateurForm = ({ goToNext }: FormProps) => {
  const { control, trigger, getValues, setValue, resetField } =
    useFormContext();
  const values = getValues();
  const { data: CompanyTypes, isLoading } = useGetCompanyType();

  const handelSubmitValue = async () => {
    let isvalid;
    if (values.liquidatorType === 1) {
      isvalid = await trigger(['firstName', 'lastName', 'Liquidatorsex']);
      if (isvalid) {
        goToNext();
        isvalid = false;
      }
    }
    if (values.liquidatorType === 2) {
      isvalid = await trigger([
        'companyLiquidatorType',
        'companyNameLiquidator',
      ]);

      if (isvalid) {
        goToNext();
        isvalid = false;
      }
    }
  };
  if (isLoading)
    return (
      <div className='flex h-full min-h-[300px] w-full items-center justify-center'>
        <Spinner color='orange.500' />
      </div>
    );
  return (
    <form className='max-w-[650px]'>
      <div className='my-5 flex flex-col  gap-4'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Le liquidateur
        </p>
        <p className='text-center text-sm font-normal leading-tight text-slate-500'>
          Ces informations nous permettront de vous assister au cours de votre
          processus de création, et seront nécessaires pour constituer votre
          dossier.
        </p>

        {/* <FormField
          name="declaration"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <FormItem className="flex flex-col gap-3 space-y-0 ">
              <FormLabel className="leading-[20px]">
                Qui est le liquidateur ?
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
                  defaultValue={value === true ? 'True' : 'False'}
                  className="flex"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="False" />
                    </FormControl>
                    <FormLabel className="font-semibold">Moi </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="True" />
                    </FormControl>
                    <FormLabel className="font-semibold">Un tiers </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          name='liquidatorType'
          control={control}
          defaultValue={1}
          render={({ field: { onChange, value } }) => (
            <FormItem className='flex flex-col gap-3 space-y-0 '>
              <FormLabel className='leading-[20px]'>
                Le liquidateur tiers est :
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    if (value === '1') {
                      resetField('companyNameLiquidator');
                      resetField('companyLiquidatorType');
                      onChange(1);
                    } else {
                      resetField('firstName');
                      resetField('lastName');
                      resetField('Liquidatorsex');
                      onChange(2);
                    }
                  }}
                  defaultValue={value === 1 ? '1' : value === 2 ? '2' : ''}
                  className='flex'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='1' />
                    </FormControl>
                    <FormLabel className='font-semibold'>
                      Un particulier (le plus fréquent)
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='2' />
                    </FormControl>
                    <FormLabel className='font-semibold'>Une société</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {values.liquidatorType === 1 ? (
          <>
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
              control={control}
              name='Liquidatorsex'
              defaultValue={''}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Civilité</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='selectioner votre civilité' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='madame'>madame</SelectItem>
                      <SelectItem value='monsieur'>monsieur</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : (
          <div>
            <FormField
              name='companyNameLiquidator'
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <FormItem className='w-1/2'>
                  <FormLabel>Nom de la société</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='companyLiquidatorType'
              defaultValue={''}
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormLabel>Forme Social</FormLabel>
                  <Select
                    onValueChange={(value) => onChange(Number(value))}
                    defaultValue={value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Forme Social' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CompanyTypes?.map((item) => (
                        <SelectItem
                          key={item.id}
                          value={String(item.id)}
                        >
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        <Button
          className='self-end text-lg font-semibold hover:bg-darkRedish'
          type='button'
          size={'lg'}
          onClick={handelSubmitValue}
        >
          Continuer
        </Button>
      </div>
    </form>
  );
};
export default DissolutionLiquidateurForm;
