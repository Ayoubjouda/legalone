import api from '@/lib/axiosConfig';
import { Spinner } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
interface FormProps {
  goToNext: () => void;
  goToPrevious: () => void;
}

export const ManagerForm = ({ goToNext, goToPrevious }: FormProps) => {
  const {
    setValue,
    control,
    trigger,
    getValues,
    formState: { errors },
  } = useFormContext();
  const values = getValues();

  const [selectedPresident, setselectedPresident] = useState<number | null>(
    values?.selectedManagerType || null
  );

  const { isLoading: ManagerLoading, data: ManagerData } = useQuery(
    'Manager',
    async () => {
      const data = (await api
        .get('managerType/')
        .then((res) => res.data)) as ManagerType[];
      return data;
    }
  );

  const handleSetValue = (newValue: number) => {
    setValue('selectedManagerType', newValue);
  };
  const handelSubmitValue = async (value: number) => {
    handleSetValue(value);
    setselectedPresident(value);
    const isValid = await trigger(['selectedManagerType']);
    if (isValid) {
      goToNext();
    }
  };
  console.log(ManagerData);

  if (ManagerLoading)
    return (
      <div className="min-h-[300px] h-full w-full flex justify-center items-center">
        <Spinner color="orange.500" />
      </div>
    );
  return (
    <form className="flex max-w-[950px] w-full justify-center items-center flex-col gap-10">
      <div className="flex flex-col w-full  gap-10">
        <div className="hidden">
          <Controller
            name="selectedManagerType"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
            rules={{ required: true }}
          />
        </div>
        <p className="text-center text-xl font-medium leading-[31px] text-slate-500">
          Qui sera président de la société ?
        </p>

        <div className="flex w-full  justify-center   flex-wrap gap-10">
          {ManagerData ? (
            ManagerData?.map((item: ManagerType, idx: number) => (
              <Button
                variant={'ghost'}
                className={cn(
                  {
                    'border-orange-500 ': item.id === selectedPresident,
                  },
                  'border  text-sm font-semibold flex-col h-auto min-w-[116px]  basis-1/4'
                )}
                key={idx}
                type="button"
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
