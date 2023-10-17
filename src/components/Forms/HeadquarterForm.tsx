import api from '@/lib/axiosConfig';
import { Spinner } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useQuery } from 'react-query';
import IconBox from '../IconBox';
import { cn } from '@/lib/utils';
import { useGetHeadQuarter } from '@/hooks/useCompany';

interface FormProps {
  goToNext: () => void;
}
const HeadquarterForm = ({ goToNext }: FormProps) => {
  const {
    setValue,
    control,
    trigger,
    formState: { errors },
    getValues,
  } = useFormContext();
  const { isLoading, data } = useGetHeadQuarter();

  const headquarter = getValues('headquarterId');
  const [selectedHQ, setSelectedHQ] = useState<number | null>(
    headquarter || null
  );
  const handleSetValue = (headquarterId: number) => {
    setValue('headquarterId', headquarterId);
  };
  const handelSubmitValue = async (value: number) => {
    handleSetValue(value);
    setSelectedHQ(value);
    const isValid = await trigger(['headquarterId']);
    if (isValid) {
      goToNext();
    }
  };
  if (isLoading)
    return (
      <div className='flex h-full min-h-[300px] w-full items-center justify-center'>
        <Spinner color='orange.500' />
      </div>
    );

  return (
    <form className='flex flex-col gap-10'>
      <div className='hidden'>
        <Controller
          name='headquarterId'
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>
      <div className='flex justify-center font-semibold text-red-500'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Où sera fixé le siège social de la Société ?
        </p>
        <ErrorMessage
          errors={errors}
          name='headquarterId'
          render={({ message }) => <p>{message}</p>}
        />
      </div>

      <div className=' flex max-w-screen-sm flex-row flex-wrap justify-center  gap-10'>
        {data?.map((item: HeadQuarter, idx: number) => (
          <IconBox
            key={idx}
            title={item.headquarter}
            image={item.iconLink}
            onClick={() => {
              handelSubmitValue(item.id);
            }}
            className={cn({ 'border-orange-500': selectedHQ === item.id })}
          />
        ))}
      </div>
    </form>
  );
};
export default HeadquarterForm;
