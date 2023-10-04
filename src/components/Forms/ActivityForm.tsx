import { Controller, useFormContext } from 'react-hook-form';
import { Button } from '../ui/button';
import { Spinner } from '@chakra-ui/react';
import { useState } from 'react';

import { ErrorMessage } from '@hookform/error-message';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useGetActivity } from '@/hooks/useCompany';
interface FormProps {
  goToNext: () => void;
}
const ActivityForm = ({ goToNext }: FormProps) => {
  const {
    setValue,
    control,
    trigger,
    getValues,
    formState: { errors },
  } = useFormContext();
  const values = getValues();
  const [selectedDomain, setselectedDomain] = useState<number | null>(
    values?.activityField || null
  );

  const { isLoading, data: ActivityData } = useGetActivity();

  const handleSetValue = (newValue: number) => {
    setValue('activityField', newValue);
  };
  const handelSubmitValue = async (value: number) => {
    handleSetValue(value);
    setselectedDomain(value);
    const isValid = await trigger(['activityField']);
    if (isValid) {
      goToNext();
    }
  };

  if (isLoading)
    return (
      <div className="min-h-[300px] h-full w-full flex justify-center items-center">
        <Spinner color="orange.500" />
      </div>
    );
  return (
    <form className="flex max-w-[950px] justify-center items-center flex-col gap-10">
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <div className="hidden">
          <Controller
            name="activityField"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
            rules={{ required: true }}
          />
        </div>
        <p className="text-center text-xl font-medium leading-[31px] text-slate-500">
          Quel est votre domaine d'activité ?
        </p>
        <div className="flex justify-center text-red-500 font-semibold">
          <ErrorMessage
            errors={errors}
            name="activityField"
            render={({ message }) => <p>{message}</p>}
          />
        </div>

        <div className="flex w-full  justify-center   flex-wrap gap-10">
          {ActivityData ? (
            ActivityData?.map((item: Activity, idx: number) => (
              <Button
                variant={'ghost'}
                className={cn(
                  { 'border-orange-500 ': item.id === selectedDomain },
                  'border  text-sm font-semibold flex-col h-auto min-w-[116px] basis-1/4'
                )}
                key={idx}
                type="button"
                onClick={() => {
                  handelSubmitValue(item.id);
                }}
              >
                <Image
                  src={item.iconLink}
                  alt={item.name}
                  width={35}
                  height={35}
                />
                {item.name}
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

export default ActivityForm;
