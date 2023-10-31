import { ErrorMessage } from '@hookform/error-message';
import { Controller, useFormContext } from 'react-hook-form';
import IconBox from '../../../IconBox';
import { cn } from '@/lib/utils';
import { Spinner } from '@chakra-ui/react';
import { useGetCompanyType } from '@/hooks/useCompany';
interface FormProps {
  goToNext: () => void;
}
const DomiciliationBaseForm = ({ goToNext }: FormProps) => {
  const {
    setValue,
    control,
    formState: { errors },
    getValues,
  } = useFormContext();

  const { isLoading, data: CompanyType } = useGetCompanyType();

  const domiciliationBase = getValues('domiciliationBase');

  const handleSetValue = (value: string) => {
    setValue('domiciliationBase', value);
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
    <form className='flex flex-col gap-10 '>
      <div className='hidden'>
        <Controller
          name='domiciliationBase'
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>

      <div className='flex justify-center font-semibold text-red-500'>
        <p className='max-w-md text-center text-xl font-medium leading-[31px] text-slate-500'>
          En domiciliant votre société à Paris, vous bénéficiez de la CFE la
          plus basse de France. Souhaitez vous domicilier votre société à Paris
          ?
        </p>
        <ErrorMessage
          errors={errors}
          name='domiciliationBase'
          render={({ message }) => <p>{message}</p>}
        />
      </div>

      <div className=' flex flex-col flex-wrap items-center gap-10 md:flex-row'>
        <IconBox
          title={'Oui'}
          image={
            'https://img.icons8.com/external-tal-revivo-regular-tal-revivo/48/external-checkbox-tick-mark-accept-your-checklist-queries-basic-regular-tal-revivo.png'
          }
          onClick={() => {
            handelSubmitValue('Oui');
          }}
          className={cn({ 'border-orange-500': domiciliationBase === 'Oui' })}
        />
        <IconBox
          title={'Non'}
          image={'https://img.icons8.com/ios/50/close-window--v1.png'}
          onClick={() => {
            handelSubmitValue('Non');
          }}
          className={cn({ 'border-orange-500': domiciliationBase === 'Non' })}
        />
      </div>
      <div className='space-y-2'>
        <p className='font-semibold'>
          Qu'est ce que la CFE et comment faire des économies ?
        </p>
        <div className='max-w-md space-y-2'>
          <p>
            En domiciliant votre société avec LegalPlace à Paris, vous
            bénéficiez de la Cotisation Foncière des Entreprises (CFE) la moins
            élevée de France.
          </p>
          <p>
            Pour les sociétés domiciliées, le montant de la CFE se calcule sur
            leur chiffre d'affaire et dépend du taux de CFE applicable de la
            ville du siège social.
          </p>

          <p>
            En 2022, pour une société avec un chiffre d'affaire entre 32 600€ et
            100 000€ les économies de CFE à Paris étaient de l'ordre de 700€ par
            an.
          </p>
        </div>
      </div>
    </form>
  );
};
export default DomiciliationBaseForm;
