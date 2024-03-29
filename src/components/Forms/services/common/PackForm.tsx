import { Controller, useFormContext } from 'react-hook-form';
import { Spinner } from '@chakra-ui/react';

import PricingComponent from '../../../PricingComponent';
import { useGetPackages } from '@/hooks/useCompany';
import { notFound, useSearchParams } from 'next/navigation';
interface FormProps {
  goToNext: () => void;
}

const PackForm = ({ goToNext }: FormProps) => {
  const { control, setValue, trigger } = useFormContext();
  const searchParams = useSearchParams();
  const packType = (searchParams.get('packType') as string) || notFound();
  const { isLoading, data } = useGetPackages(packType);

  const handleSetValue = (pack: Package) => {
    setValue('pack', pack);
  };
  const handelSubmitValue = async (value: Package) => {
    handleSetValue(value);
    const isValid = await trigger(['pack']);
    if (isValid) {
      goToNext();
    }
  };

  if (isLoading && !data)
    return (
      <div className='flex h-full min-h-[300px] w-full items-center justify-center'>
        <Spinner color='orange.500' />
      </div>
    );

  return (
    <form className='flex w-full flex-col gap-8'>
      <div className='hidden'>
        <Controller
          name='pack'
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>
      <div>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Choisissez votre pack
        </p>
      </div>
      <div className='flex w-full flex-wrap justify-center gap-10 '>
        {data?.map((item: Package, idx: number) => (
          <PricingComponent
            key={item.name}
            {...item}
            onButtonClick={() => handelSubmitValue(item)}
          />
        ))}
      </div>
    </form>
  );
};
export default PackForm;
