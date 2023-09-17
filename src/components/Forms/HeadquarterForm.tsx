import api from '@/lib/axiosConfig';
import { Spinner } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useQuery } from 'react-query';
import IconBox from '../IconBox';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface FormProps {
  goToNext: () => void;
  goToPrevious: () => void;
}
const HeadquarterForm = ({ goToNext, goToPrevious }: FormProps) => {
  const {
    setValue,
    control,
    trigger,
    formState: { errors },
    getValues,
  } = useFormContext();
  const { isLoading, data } = useQuery('headquarter', async () => {
    const data = (await api
      .get('companyHeadquarter/')
      .then((res) => res.data)) as HeadQuarter[];
    return data;
  });

  const headquarter = getValues('headquarter');
  const [selectedHQ, setSelectedHQ] = useState<number | null>(
    headquarter || null
  );
  const handleSetValue = (headquarterId: number) => {
    setValue('headquarter', headquarterId);
  };
  const handelSubmitValue = async (value: number) => {
    handleSetValue(value);
    setSelectedHQ(value);
    const isValid = await trigger(['headquarter']);
    if (isValid) {
      goToNext();
    }
  };
  if (isLoading) return <Spinner color="orange.500" />;

  return (
    <form className="flex flex-col gap-10">
      <div>
        <Controller
          name="headquarter"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              className="hidden"
              {...field}
            />
          )}
          rules={{ required: true }}
        />
      </div>
      <div className="flex justify-center text-red-500 font-semibold">
        <p className="text-center text-xl font-medium leading-[31px] text-slate-500">
          Où sera fixé le siège social de la Société ?
        </p>
        <ErrorMessage
          errors={errors}
          name="headquarter"
          render={({ message }) => <p>{message}</p>}
        />
      </div>

      <div className=" flex flex-wrap justify-center flex-row max-w-screen-sm  gap-10">
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
