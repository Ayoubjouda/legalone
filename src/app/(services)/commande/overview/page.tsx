'use client';
import { Icons } from '@/components/Icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';

interface pageProps {}

const Page: FC<pageProps> = () => {
  const searchParam = useSearchParams();
  const stripeSessionId = searchParam.get('session_id');
  const router = useRouter();
  router.push('/dashboard');
  // useEffect(() => {
  //   api
  //     .get(`payment/verifyPayment/checkoutSession/${stripeSessionId}/order/244`)
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, []);
  return (
    <div className='h-full w-full'>
      <Icons.spinner
        size={64}
        className='animate-spin'
      />
    </div>
  );
};

export default Page;
