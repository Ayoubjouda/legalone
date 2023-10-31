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
import { useState } from 'react';
import { useGetCompanyType } from '@/hooks/useCompany';
import { Spinner } from '@chakra-ui/react';
import { X } from 'lucide-react';
interface FormProps {
  goToNext: () => void;
}

interface AssociateDto {
  associateFirstName: string;
  associateLastName: string;
  associateSex: string;
}

interface CompanyAssociateDto {
  companyNameAssociate: string;
  companyAssociateType: number;
}

interface MyInterface {
  type: number;
  dto: AssociateDto | CompanyAssociateDto;
}

const DissolutionAssocierForm = ({ goToNext }: FormProps) => {
  const { control, trigger, getValues, setValue } = useFormContext();

  const values = getValues();
  const { data: CompanyTypes, isLoading } = useGetCompanyType();
  console.log(values);
  const handleAddField = () => {
    setValue('associates', [
      ...values.associates,
      { type: 1, dto: {} } as MyInterface,
    ]);
  };
  if (!values.associates) {
    setValue('associates', [{ type: 1, dto: {} } as MyInterface]);
  }

  const handleDeleteItem = (index: number) => {
    const newCount = [...values.associates];
    newCount.splice(index, 1);
    setValue('associates', newCount);
  };

  if (isLoading)
    return (
      <div className='flex h-full min-h-[300px] w-full items-center justify-center'>
        <Spinner color='orange.500' />
      </div>
    );

  // console.log(count);

  return (
    <form className='max-w-[650px]'>
      <div className='my-5 flex flex-col  gap-4'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Les associés
        </p>
        <p className='text-center text-sm font-normal leading-tight text-slate-500'>
          Ces informations nous permettront de vous assister au cours de votre
          processus de création, et seront nécessaires pour constituer votre
          dossier.
        </p>

        {values.associates.map((item: MyInterface, index: number) => (
          <div key={item.type}>
            <FormField
              name={`associates.${index}.type`}
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <FormItem className='flex flex-col gap-3 space-y-0 '>
                  <FormLabel className='relative leading-[20px]'>
                    Cet associé est :
                    {values.associates.length > 1 ? (
                      <div
                        className='absolute right-0 cursor-pointer'
                        onClick={() => handleDeleteItem(index)}
                      >
                        <X />
                      </div>
                    ) : null}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        if (value === 'True') {
                          onChange(1);
                        } else {
                          onChange(2);
                        }
                      }}
                      defaultValue={item.type === 1 ? 'True' : 'False'}
                      className='flex'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='True' />
                        </FormControl>
                        <FormLabel className='font-semibold'>
                          Un particulier
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='False' />
                        </FormControl>
                        <FormLabel className='font-semibold'>
                          Une société
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {values.associates[index].type === 1 ? (
              <>
                <div className='flex w-full gap-2 '>
                  <FormField
                    name={`associates.${index}.dto.associateFirstName`}
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
                    name={`associates.${index}.dto.associateLastName`}
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
                  name={`associates.${index}.dto.associateSex`}
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
                  name={`associates.${index}.dto.companyNameAssociate`}
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
                  name={`associates.${index}.dto.companyAssociateType`}
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
          </div>
        ))}
        <Button
          className='self-end text-lg font-semibold hover:bg-darkRedish'
          type='button'
          size={'lg'}
          onClick={handleAddField}
        >
          Add
        </Button>

        <Button
          className='self-end text-lg font-semibold hover:bg-darkRedish'
          type='button'
          size={'lg'}
          onClick={async () => {
            const isValid = await trigger(['associates']);
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
export default DissolutionAssocierForm;
