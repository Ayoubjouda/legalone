import { ErrorMessage } from '@hookform/error-message';
import { Controller, useFormContext } from 'react-hook-form';
import IconBox from '../IconBox';
import { cn } from '@/lib/utils';
import { useState } from 'react';
interface FormProps {
  goToNext: () => void;
}
const DurationForm = ({ goToNext }: FormProps) => {
  const {
    setValue,
    control,
    trigger,
    formState: { errors },
    getValues,
  } = useFormContext();
  const creationDelay = getValues('creationDelay');
  const [selected, setselected] = useState<string>(creationDelay);
  const handleSetValue = (newValue: string) => {
    setValue('creationDelay', newValue);
  };
  const handelSubmitValue = (value: string) => {
    handleSetValue(value);
    setselected(value);
    goToNext();
  };

  return (
    <form className='flex flex-col gap-10'>
      <div className='hidden'>
        <Controller
          name='creationDelay'
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
        <IconBox
          title='Dans un mois'
          image={'/fast.svg'}
          onClick={() => {
            handelSubmitValue('WEEKLY');
          }}
          className={cn({ 'border-orange-500': selected === 'WEEKLY' })}
        />
        <IconBox
          title='Dans la Semaine'
          image={'/calander.svg'}
          onClick={() => {
            handelSubmitValue('MONTHLY');
          }}
          className={cn({ 'border-orange-500': selected === 'MONTHLY' })}
        />
        <IconBox
          title='Je ne sais pas encore'
          image={'/doubt.svg'}
          onClick={() => {
            handelSubmitValue('je ne sais pas');
          }}
          className={cn({ 'border-orange-500': selected === 'je ne sais pas' })}
        />
      </div>
    </form>
  );
};
export default DurationForm;
