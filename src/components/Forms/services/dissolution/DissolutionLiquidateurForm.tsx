import { useGetCompanyType } from '@/hooks/useCompany';
import { Spinner } from '@chakra-ui/react';
import { ChevronRight } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { Button } from '../../../ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../ui/form';
import { Input } from '../../../ui/input';
import { RadioGroup, RadioGroupItem } from '../../../ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../ui/select';
interface FormProps {
  goToNext: () => void;
}
const DissolutionLiquidateurForm = ({ goToNext }: FormProps) => {
  const { control, trigger, getValues, resetField } = useFormContext();
  const values = getValues();
  const { data: CompanyTypes, isLoading } = useGetCompanyType();

  const selectedType =
    CompanyTypes?.find((item) => item.id === values.companyLiquidatorType)
      ?.id || values.companyLiquidatorType;

  const handelSubmitValue = async () => {
    let isvalid;
    if (values.liquidatorType === 1) {
      isvalid = await trigger(['firstName', 'lastName', 'liquidatorsex']);
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
  if (isLoading || !CompanyTypes)
    return (
      <div className='flex h-full min-h-[300px] w-full items-center justify-center'>
        <Spinner color='orange.500' />
      </div>
    );
  return (
    <form className='w-full max-w-[650px]'>
      <div className='my-5 flex flex-col  gap-4'>
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
                      resetField('liquidatorsex');
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
              name='liquidatorsex'
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
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormLabel>Forme Social</FormLabel>
                  <Select
                    onValueChange={(value) => onChange(Number(value))}
                    value={String(selectedType)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Forme Social' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CompanyTypes?.map((item) => (
                        <SelectItem
                          key={item.name}
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
          className='self-end bg-black font-semibold hover:bg-black/80 '
          type='button'
          size={'sm'}
          onClick={handelSubmitValue}
        >
          Continuer
          <ChevronRight size={16} />
        </Button>
      </div>
    </form>
  );
};
export default DissolutionLiquidateurForm;
