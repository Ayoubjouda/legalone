import { ErrorMessage } from '@hookform/error-message';
import { Controller, useFormContext } from 'react-hook-form';
import IconBox from '../../../IconBox';
import { cn } from '@/lib/utils';
import { Spinner } from '@chakra-ui/react';
import {
  useGetCompanyType,
  useGetSubscriptionsPackages,
} from '@/hooks/useCompany';
interface FormProps {
  goToNext: () => void;
}
const SubscriptionForm = ({ goToNext }: FormProps) => {
  const {
    setValue,
    control,
    formState: { errors },
    getValues,
  } = useFormContext();

  const { isLoading, data: CompanyType } = useGetCompanyType();
  const { data: subscriptions } = useGetSubscriptionsPackages();

  const subscription = getValues('subscription');

  const handleSetValue = (value: string) => {
    setValue('subscription', value);
  };
  const handelSubmitValue = (value: string) => {
    handleSetValue(value);
    goToNext();
  };
  if (isLoading)
    return (
      <div className='flex h-full min-h-[300px] w-full items-center justify-center '>
        <Spinner color='orange.500' />
      </div>
    );

  return (
    <form className='flex flex-col gap-5 '>
      <div className='hidden'>
        <Controller
          name='subscription'
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>

      <div className='flex justify-center font-semibold text-red-500'>
        <ErrorMessage
          errors={errors}
          name='subscription'
          render={({ message }) => <p>{message}</p>}
        />
      </div>
      <div className='max-w-md space-y-2'>
        <p>
          Scan quotidien de tous vos courriers, disponible sur votre espace
          dédié
        </p>
        <p>Réexpédition quotidienne de vos courriers sensibles*</p>

        <p>
          Bénéficiez d'une adresse prestigieuse et de la cotisation foncière
          d'entreprise la plus faible de France
        </p>
      </div>

      <div className=' flex flex-col flex-wrap items-center gap-10 md:flex-row'>
        {subscriptions?.map((item) => (
          <IconBox
            key={item.stripeProductId}
            title={item.title}
            image={item.icon || ''}
            onClick={() => {
              handelSubmitValue(String(item.id));
            }}
            className={cn({
              'border-orange-500': subscription === String(item.id),
            })}
          />
        ))}
      </div>
      <div className='space-y-2'>
        <p className='font-semibold'>
          Qu'est ce que la CFE et comment faire des économies ?
        </p>
        <div className='max-w-md space-y-2'>
          <p className='text-xs'>
            *Nous appelons courriers sensibles les courriers adressés à votre
            société qui nécessitent une remise physique dès réception. Ces
            courriers vous seront donc automatiquement retournés le jour même
            sans demande de votre part ni cout additionnel.
          </p>
        </div>
      </div>
    </form>
  );
};
export default SubscriptionForm;
