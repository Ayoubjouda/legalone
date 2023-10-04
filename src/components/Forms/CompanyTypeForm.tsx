import { ErrorMessage } from '@hookform/error-message';
import { Controller, useFormContext } from 'react-hook-form';
import IconBox from '../IconBox';
import { cn } from '@/lib/utils';
import { Spinner } from '@chakra-ui/react';
import { useGetCompanyType } from '@/hooks/useCompany';
interface FormProps {
  goToNext: () => void;
}
const CompanyTypeForm = ({ goToNext }: FormProps) => {
  const {
    setValue,
    control,
    formState: { errors },
    getValues,
  } = useFormContext();

  const { isLoading, data: CompanyType } = useGetCompanyType();

  const companyName = getValues('creationDelay');

  const handleSetValue = (newValue: string) => {
    setValue('creationDelay', newValue);
  };
  const handelSubmitValue = (value: string) => {
    handleSetValue(value);
    goToNext();
  };
  if (isLoading)
    return (
      <div className="min-h-[300px] h-full w-full flex justify-center items-center">
        <Spinner color="orange.500" />
      </div>
    );

  return (
    <form className="flex flex-col gap-10">
      <div className="hidden">
        <Controller
          name="companyType"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>

      <div className="flex justify-center text-red-500 font-semibold">
        <p className="text-center text-xl font-medium leading-[31px] text-slate-500">
          Dans quel délai souhaitez-vous créer votre société ?
        </p>
        <ErrorMessage
          errors={errors}
          name="creationDelay"
          render={({ message }) => <p>{message}</p>}
        />
      </div>

      <div className=" flex flex-col items-center md:flex-row flex-wrap gap-10">
        {CompanyType?.map((item) => (
          <IconBox
            key={item.id}
            title={item.name}
            image={item.iconLink}
            onClick={() => {
              handelSubmitValue(item.name);
            }}
            className={cn({ 'border-orange-500': companyName === item.name })}
          />
        ))}
      </div>
    </form>
  );
};
export default CompanyTypeForm;
