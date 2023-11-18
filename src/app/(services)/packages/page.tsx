'use client';
import PricingComponent from '@/components/PricingComponent';
import { useGetPackages } from '@/hooks/useCompany';
import api from '@/lib/axiosConfig';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';

interface pageProps {}

const Page: FC<pageProps> = () => {
  const { isLoading, data } = useGetPackages();
  const searchParams = useSearchParams();
  const formalityId = searchParams.get('formality') as number | null;
  const router = useRouter();
  const handlePayment = async (orderId: number) => {
    api
      .post('/payment/handlepayment', {
        currency: 'usd',
        description: 'test payment',
        order: orderId as number,
      })
      .then((res) => {
        window.location.assign(res.data.payment.stripeIntent.sessionUrl);
      });
  };
  const handleOrders = async (id: number) => {
    if (!formalityId) return alert('formality is required');
    try {
      const data = await api.post('/order', {
        formality: formalityId,
        package: id,
      });
      console.log(data.data);
      if (!data.data) throw Error('no data');
      api
        .post('/payment/handlepayment', {
          currency: 'usd',
          description: 'test payment',
          order: data?.data?.id as number,
        })
        .then((res) => {
          window.location.assign(res.data.payment.stripeIntent.sessionUrl);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className='h-full w-full'>
      <form className='mx-auto my-10 flex w-full max-w-screen-lg flex-col flex-wrap items-center justify-center gap-8'>
        <div>
          <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
            Choisissez votre pack
          </p>
        </div>
        <div className='flex w-full flex-wrap justify-center gap-10 '>
          {data?.map((item: Package, idx: number) => (
            <PricingComponent
              key={idx}
              {...item}
              onButtonClick={() => handleOrders(item.id)}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Page;
