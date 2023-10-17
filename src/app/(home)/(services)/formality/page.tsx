'use client';
import { useSubmitFormality } from '@/hooks/useServices';
import useAppStore from '@/zustand/store';
import { Spinner } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

interface pageProps {}

const Page: FC<pageProps> = () => {
  const { FormalityMutation, isLoading } = useSubmitFormality();
  const { formality } = useAppStore();
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      localStorage.setItem('intendedDestination', '/formality');
      router.push('login');
    } else {
      FormalityMutation(formality);
    }
  }, [FormalityMutation, formality]);
  return (
    <div className='flex h-full w-full items-center justify-center'>
      {isLoading && (
        <div className='flex flex-col'>
          <Spinner
            color='warning'
            size='lg'
          />
          <p>Submitting Formality</p>
        </div>
      )}
    </div>
  );
};

export default Page;
