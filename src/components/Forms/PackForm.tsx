import { Controller, useFormContext } from 'react-hook-form';
import Pack from '../Pack';
import { Spinner } from '@chakra-ui/react';
import api from '@/lib/axiosConfig';
import { useState } from 'react';
import { useQuery } from 'react-query';
import PricingComponent from '../PricingComponent';
interface FormProps {
  goToNext: () => void;
  goToPrevious: () => void;
}

const PackForm = ({ goToNext, goToPrevious }: FormProps) => {
  const { control, setValue, trigger, getValues } = useFormContext();
  const values = getValues();
  const [selectedPack, setSelectedPack] = useState<Package | null>(
    values.pack || null
  );
  const { isLoading, data } = useQuery('packs', async () => {
    const data = (await api
      .get('package')
      .then((res) => res.data)) as Package[];
    return data;
  });

  const handleSetValue = (pack: Package) => {
    setValue('pack', pack);
    setSelectedPack(pack);
  };
  const handelSubmitValue = async (value: Package) => {
    handleSetValue(value);
    setSelectedPack(value);
    const isValid = await trigger(['pack']);
    if (isValid) {
      goToNext();
    }
  };
  if (isLoading && !data)
    return (
      <div className="min-h-[300px] h-full w-full flex justify-center items-center">
        <Spinner color="orange.500" />
      </div>
    );
  return (
    <form className="w-full flex flex-col gap-8">
      <div className="hidden">
        <Controller
          name="pack"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>
      <div>
        <p className="text-center text-xl font-medium leading-[31px] text-slate-500">
          Choisissez votre pack
        </p>
      </div>
      <div className="flex w-full justify-center flex-wrap gap-10 ">
        {data?.map((item: Package, idx: number) => (
          <PricingComponent
            key={item.name}
            {...item}
            onButtonClick={() => handelSubmitValue(item)}
          />
          // <Pack
          //   key={idx}
          //   {...item}
          //   selected={selectedPack === item.id}
          //   onButtonClick={() => handelSubmitValue(item.id)}
          // />
        ))}
      </div>
    </form>
  );
};
export default PackForm;
