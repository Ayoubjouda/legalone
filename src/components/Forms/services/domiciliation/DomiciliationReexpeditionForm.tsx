import { ErrorMessage } from '@hookform/error-message';
import { Controller, useFormContext } from 'react-hook-form';
import IconBox from '../../../IconBox';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import useAppStore from '@/zustand/store';

interface FormProps {
  goToNext: () => void;
}

const Package: Package = {
  id: 6,
  name: 'Standard',
  type: 'Standard',
  description: 'This is a sample package description.',
  packageStripeId: '322',
  price: 30,
  elements: [
    {
      text: 'Element 1',
    },
    {
      text: 'Element 2',
    },
  ],
  extra: [
    {
      text: 'Element 1',
    },
    {
      text: 'Element 2',
    },
  ],
  packageDetails: [
    {
      text: 'Detail 1',
      detail: 'Detail 1 Description',
    },
    {
      text: 'Detail 2',
      detail: 'Detail 2 Description',
    },
  ],
  administrativeFees: {
    perks: [
      {
        text: 'Perk 1',
        detail: 'Perk 1 Description',
      },
      {
        text: 'Perk 2',
        detail: 'Perk 2 Description',
      },
    ],
    price: 0,
    description: 'Administrative Fee Description',
    isObligatory: true,
  },
};

const DomiciliationReexpeditionForm = ({ goToNext }: FormProps) => {
  const {
    setValue,
    control,
    formState: { errors },
    getValues,
  } = useFormContext();
  const { setOrder } = useAppStore();
  const values = getValues();
  const expedition = getValues('expedition');
  const router = useRouter();
  const pathname = usePathname();

  const handleSetValue = (value: string) => {
    setValue('expedition', value);
  };
  const handleSubmitOrder = async () => {
    const accessToken: string | null = localStorage.getItem('accessToken');
    // if (!accessToken) {
    //   await localStorage.setItem(
    //     'intendedDestination',
    //     pathname + window.location.search
    //   );
    //   router.push('/login');
    // } else {
    //   api
    //     .post('/order/company-creation', { description: 'test' })
    //     .then((res) => {
    //       console.log(res);
    //       setOrder({
    //         orderId: res.data.orderId,
    //         companyType: 'Domiciliation',
    //         pack: Package,
    //       } as OrderType);

    //       router.push(`/checkout`);
    //     });
    // }
  };
  const handelSubmitValue = (value: string) => {
    handleSetValue(value);
    handleSubmitOrder();
  };

  return (
    <form className='flex flex-col gap-10 '>
      <div className='hidden'>
        <Controller
          name='expedition'
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>

      <div className='flex justify-center font-semibold text-red-500'>
        <p className='max-w-md text-center text-xl font-medium leading-[31px] text-slate-500'>
          Fréquence de réexpédition
        </p>
        <ErrorMessage
          errors={errors}
          name='expedition'
          render={({ message }) => <p>{message}</p>}
        />
      </div>
      <div className='max-w-2xl space-y-2'>
        <p>
          Vous recevrez tous les jours votre courrier scanné dans votre espace
          client et serez notifié par email 📧
        </p>
      </div>

      <div className=' flex flex-col flex-wrap items-center gap-10 md:flex-row'>
        <IconBox
          title={'Pas de réexpédition Gratuit'}
          image={
            'https://img.icons8.com/external-soft-fill-juicy-fish/60/external-free-sales-soft-fill-soft-fill-juicy-fish.png'
          }
          onClick={() => {
            handelSubmitValue('0');
          }}
          className={cn({ 'border-orange-500': expedition === 'Oui' })}
        />
        <IconBox
          title={'Chaque mois 10$/mois'}
          image={
            'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-monthly-medical-ecommerce-flaticons-lineal-color-flat-icons.png'
          }
          onClick={() => {
            handelSubmitValue('10');
          }}
          className={cn({ 'border-orange-500': expedition === 'Non' })}
        />
        <IconBox
          title={'Chaque semaine 15$/mois'}
          image={
            'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-week-morning-flaticons-lineal-color-flat-icons.png'
          }
          onClick={() => {
            handelSubmitValue('15');
          }}
          className={cn({ 'border-orange-500': expedition === 'Non' })}
        />
      </div>
      <div className='space-y-2'>
        <p className='max-w-2xl font-semibold '>
          A savoir : les originaux des courriers "sensibles" vous sont renvoyés
          gratuitement à votre adresse dans la journée 📬
        </p>
      </div>
    </form>
  );
};
export default DomiciliationReexpeditionForm;
