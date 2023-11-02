'use client';
import api from '@/lib/axiosConfig';
import { FC, use, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Spinner } from '@nextui-org/react';

interface pageProps {}

const Page: FC<pageProps> = () => {
  const searchParam = useSearchParams();
  const stripeSessionId = searchParam.get('session_id');
  // useEffect(() => {
  //   api
  //     .get(`payment/verifyPayment/checkoutSession/${stripeSessionId}/order/244`)
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, []);
  return (
    <div className='h-full w-full'>
      <Spinner />
    </div>
  );
};

export default Page;
