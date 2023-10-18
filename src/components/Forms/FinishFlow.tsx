'use client';
import { useFormContext } from 'react-hook-form';
import { Spinner } from '@nextui-org/react';
import { useRef, useEffect } from 'react';
import { useSubmitFormality } from '@/hooks/useServices';
import { useRouter } from 'next/navigation';
import useAppStore from '@/zustand/store';
import { Formality } from '@/types/order';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';

interface FormProps {
  goToNext: () => void;
}
const FinishFlow = ({ goToNext }: FormProps) => {
  const {
    formState: { errors },
    handleSubmit,
  } = useFormContext();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { status } = useSession();
  const { FormalityMutation, isLoading } = useSubmitFormality();

  useEffect(() => {
    if (buttonRef.current) {
      // Trigger a click on the button
      buttonRef.current.click();
    }
  }, []);

  if (Object.keys(errors).length > 0) {
    toast.error(
      `Il y a des erreurs dans le formulaire dans : ${Object.keys(errors)}`
    );
    // router.push('/');
  }

  const onSubmit = async (data: Formality) => {
    if (status === 'unauthenticated') {
      console.log('log');
      localStorage.setItem('intendedDestination', `${window.location.href}`);
      router.push('login');
    } else {
      FormalityMutation(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mt-20 flex flex-col items-center justify-center gap-10'
    >
      <button
        ref={buttonRef}
        type='submit'
        className='hidden'
      >
        submit
      </button>
      <div>
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
    </form>
  );
};
export default FinishFlow;
