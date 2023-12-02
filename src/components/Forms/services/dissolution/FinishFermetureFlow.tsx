'use client';
import { Icons } from '@/components/Icons';
import {
  useSubmitFermetureFormality,
  useSubmitUpdateFormality,
} from '@/hooks/useServices';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'sonner';

interface FormProps {}
const FinishFermetureFlow = () => {
  const {
    formState: { errors },
    handleSubmit,
  } = useFormContext();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { status } = useSession();
  const { FormalityDissolutionMutation, isLoading } =
    useSubmitFermetureFormality();

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
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    console.log(data);
    if (status === 'unauthenticated') {
      localStorage.setItem('intendedDestination', `${window.location.href}`);
      toast.message('Vous devez vous connecter pour continuer');
      router.push('login');
    } else {
      FormalityDissolutionMutation(data);
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
          <div className='flex flex-col items-center justify-center gap-4'>
            <Icons.spinner
              size={48}
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
export default FinishFermetureFlow;
