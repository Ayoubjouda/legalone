'use client';
import { Icons } from '@/components/Icons';
import { useSubmitCreateFormality } from '@/hooks/useServices';
import { Formality } from '@/types/order';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
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
  const { FormalityCreationMutation, isLoading } = useSubmitCreateFormality();

  useEffect(() => {
    if (buttonRef.current) {
      // Trigger a click on the button
      buttonRef.current.click();
    }
  }, []);

  if (Object.keys(errors).length > 0) {
    router.push('/');

    // Only in Dev Mode to Detect Form Errors before submit
    // toast.error(
    //   `Il y a des erreurs dans le formulaire dans : ${Object.keys(errors)}`
    // );
  }

  const onSubmit = async (data: Formality) => {
    if (status === 'unauthenticated') {
      localStorage.setItem('intendedDestination', `${window.location.href}`);
      toast.message('Vous devez vous connecter pour continuer');
      router.push('login');
    } else {
      FormalityCreationMutation(data);
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
          <div className='flex flex-col gap-4'>
            <Icons.spinner
              size={64}
              className='animate-spin'
            />
            <p className='font-semibold'>
              Votre dossier est en cours de traitement
            </p>
          </div>
        )}
      </div>
    </form>
  );
};
export default FinishFlow;
