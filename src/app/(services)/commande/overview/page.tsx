'use client';
import api from '@/lib/axiosConfig';
import { FC, use, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface pageProps {}

const Page: FC<pageProps> = () => {
  // const searchParam = useSearchParams();
  // const stripeSessionId = searchParam.get('session_id');
  useEffect(() => {
    api
      .get(
        'payment/verifyPayment/checkoutSession/cs_test_a1D8jtn0H28TvnZXSC12dNTn87PKExrvVNmmYGHLQfth0BQnPXinijBjt5/order/244'
      )
      .then((res) => {
        console.log(res);
      });
  }, []);
  return <div>page</div>;
};

export default Page;
