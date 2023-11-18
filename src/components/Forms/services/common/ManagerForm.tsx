import api from '@/lib/axiosConfig';
import { Spinner } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Button } from '../../../ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useGetManagerType } from '@/hooks/useCompany';
interface FormProps {
  goToNext: () => void;
}

export const ManagerForm = ({ goToNext }: FormProps) => {
  const {
    setValue,
    control,
    trigger,
    getValues,
    resetField,
    formState: { errors },
  } = useFormContext();
  const values = getValues();

  const [selectedPresident, setselectedPresident] = useState<number | null>(
    values?.managerType || null
  );

  const { isLoading: ManagerLoading, data: ManagerData } = useGetManagerType();

  const handleSetValue = (newValue: number) => {
    setValue('managerType', newValue);
  };
  const handelSubmitValue = async (value: number) => {
    handleSetValue(value);
    setselectedPresident(value);
    const isValid = await trigger(['managerType']);
    if (isValid) {
      if (value === 2) {
        resetField('raisonSocial');
        resetField('legalState');
        resetField('Rcs');
      } else if (value === 1) {
        resetField('firstName');
        resetField('lastName');
        resetField('sex');
      }
      goToNext();
    }
  };

  if (ManagerLoading)
    return (
      <div className='flex h-full min-h-[300px] w-full items-center justify-center'>
        <Spinner color='orange.500' />
      </div>
    );
  return (
    <form className='flex w-full max-w-[950px] flex-col items-center justify-center gap-10'>
      <div className='flex w-full flex-col  gap-10'>
        <div className='hidden'>
          <Controller
            name='managerType'
            control={control}
            defaultValue=''
            render={({ field }) => <input {...field} />}
            rules={{ required: true }}
          />
        </div>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Qui sera président de la société ?
        </p>

        <div className='flex w-full  flex-wrap   justify-center gap-10'>
          {ManagerData ? (
            ManagerData?.map((item: ManagerType, idx: number) => (
              <Button
                variant={'ghost'}
                className={cn(
                  {
                    'border-orange-500 ': item.id === selectedPresident,
                  },
                  'h-auto  min-w-[116px] basis-1/4 flex-col border text-sm  font-semibold'
                )}
                key={idx}
                type='button'
                onClick={() => {
                  handelSubmitValue(item.id);
                }}
              >
                <Image
                  src={item.iconLink}
                  alt={item.type}
                  width={35}
                  height={35}
                />
                {item.type}
              </Button>
            ))
          ) : (
            <p>No Data Found Please Refresh the page</p>
          )}
        </div>
      </div>
    </form>
  );
};
export default ManagerForm;
