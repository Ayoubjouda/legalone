import { ErrorMessage } from '@hookform/error-message';
import { Controller, useFormContext } from 'react-hook-form';
import IconBox from '../IconBox';
import { cn } from '@/lib/utils';
import { Spinner } from '@chakra-ui/react';
import { useGetCompanyType } from '@/hooks/useCompany';
interface FormProps {
  goToNext: () => void;
}
const CompanyTypeForm = ({ goToNext }: FormProps) => {
  const {
    setValue,
    control,
    formState: { errors },
    getValues,
  } = useFormContext();

  const { isLoading, data: CompanyType } = useGetCompanyType();

  const companyType = getValues('companyType');
  console.log(companyType);
  const handleSetValue = (id: number) => {
    setValue('companyType', id);
  };
  const handelSubmitValue = (id: number) => {
    handleSetValue(id);
    goToNext();
  };
  if (isLoading)
    return (
      <div className='flex h-full min-h-[300px] w-full items-center justify-center'>
        <Spinner color='orange.500' />
      </div>
    );

  return (
    <form className='flex max-w-lg flex-col gap-10'>
      <div className='hidden'>
        <Controller
          name='companyType'
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>

      <div className='flex justify-center font-semibold text-red-500'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Dans quel délai souhaitez-vous créer votre société ?
        </p>
        <ErrorMessage
          errors={errors}
          name='creationDelay'
          render={({ message }) => <p>{message}</p>}
        />
      </div>

      <div className=' flex flex-col flex-wrap items-center gap-10 md:flex-row'>
        {CompanyType?.map((item) => (
          <IconBox
            key={item.id}
            title={item.name}
            image={item.iconLink}
            onClick={() => {
              handelSubmitValue(item.id);
            }}
            className={cn({ 'border-orange-500': companyType === item.id })}
          />
        ))}
      </div>
    </form>
  );
};
export default CompanyTypeForm;
