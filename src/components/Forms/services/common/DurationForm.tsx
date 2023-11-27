import { ErrorMessage } from '@hookform/error-message';
import { Controller, useFormContext } from 'react-hook-form';
import IconBox from '../../../IconBox';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
interface FormProps {
  goToNext: () => void;
}

const DurationsValues = [
  {
    title: 'Dans un mois',
    image: '/fast.svg',
    value: 'WEEKLY',
  },
  {
    title: 'Dans la Semaine',
    image: '/calander.svg',
    value: 'MONTHLY',
  },
  {
    title: 'Je ne sais pas encore',
    image: '/doubt.svg',
    value: 'je ne sais pas',
  },
];

const DurationForm = ({ goToNext }: FormProps) => {
  const {
    setValue,
    control,
    trigger,
    formState: { errors },
    getValues,
  } = useFormContext();
  const creationDelay = getValues('delay');
  const [selected, setselected] = useState<string>(creationDelay);
  const handleSetValue = (newValue: string) => {
    setValue('delay', newValue);
  };
  const searchParams = useSearchParams();
  const companyType =
    (searchParams.get('type') as CompanyEnum) || ('SAS' as CompanyEnum);
  const handelSubmitValue = (value: string) => {
    handleSetValue(value);
    setselected(value);
    goToNext();
  };

  return (
    <form className='flex flex-col gap-10'>
      <div className='hidden'>
        <Controller
          name='companyType'
          control={control}
          defaultValue={companyType}
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>
      <div className='hidden'>
        <Controller
          name='delay'
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>

      <div className='flex justify-center font-semibold text-red-500'>
        <ErrorMessage
          errors={errors}
          name='delay'
          render={({ message }) => <p>{message}</p>}
        />
      </div>

      <div className=' flex flex-col flex-wrap items-center gap-10 md:flex-row'>
        {DurationsValues.map((item) => (
          <IconBox
            key={item.value}
            title={item.title}
            image={item.image}
            onClick={() => {
              handelSubmitValue(item.value);
            }}
            className={cn({ 'border-orange-500': selected === item.value })}
          />
        ))}
      </div>
    </form>
  );
};
export default DurationForm;
