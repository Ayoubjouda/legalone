'use client';
import { Icons } from '@/components/Icons';
import { useVerifyPayment } from '@/hooks/usePayment';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect } from 'react';

interface pageProps {}

const Page: FC<pageProps> = () => {
  const searchParam = useSearchParams();
  const stripeSessionId = searchParam.get('session_id');
  const router = useRouter();
  const { mutate: verifyPayment } = useVerifyPayment();
  useEffect(() => {
    if (!stripeSessionId) return;
    verifyPayment(stripeSessionId, {
      onSuccess: () => router.push('/'),
    });
  }, [stripeSessionId]);
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='mt-20  flex flex-col items-center gap-2'>
        <Icons.spinner
          size={48}
          className='animate-spin'
        />
        <p className='text-center text-2xl'>
          Vérification du paiement en cours...
        </p>
      </div>
    </div>
  );
};

export default Page;
