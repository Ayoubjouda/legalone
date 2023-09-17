import { Controller, useFormContext } from 'react-hook-form';
import Pack from '../Pack';
import { Spinner } from '@chakra-ui/react';
import api from '@/lib/axiosConfig';
import { useState } from 'react';
import { useQuery } from 'react-query';
interface FormProps {
  goToNext: () => void;
  goToPrevious: () => void;
}

const PackForm = ({ goToNext, goToPrevious }: FormProps) => {
  const { control, setValue, trigger, getValues } = useFormContext();
  const values = getValues();
  const [selectedPack, setSelectedPack] = useState<number | null>(
    values.pack || null
  );
  const { isLoading, data } = useQuery('packs', async () => {
    const data = (await api
      .get('package/getAllPackage')
      .then((res) => res.data)) as Package[];
    return data;
  });

  const handleSetValue = (packId: number) => {
    setValue('pack', packId);
    setSelectedPack(packId);
  };
  const handelSubmitValue = async (value: number) => {
    handleSetValue(value);
    setSelectedPack(value);
    const isValid = await trigger(['pack']);
    if (isValid) {
      goToNext();
    }
  };
  if (isLoading && !data) return <Spinner color="orange.500" />;
  return (
    <form className="w-full flex flex-col gap-8">
      <div className="hidden">
        <Controller
          name="companyType"
          control={control}
          defaultValue="SARL"
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div className="hidden">
        <Controller
          name="pack"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>
      <div className="flex w-full justify-center flex-wrap gap-10 ">
        {data?.map((item: Package, idx: number) => (
          <Pack
            key={idx}
            {...item}
            selected={selectedPack === item.id}
            onButtonClick={() => handelSubmitValue(item.id)}
          />
        ))}
      </div>
    </form>
  );
};
export default PackForm;
