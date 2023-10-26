'use client';
import { useFormContext } from 'react-hook-form';
import { Spinner } from '@nextui-org/react';
import { useRef, useEffect } from 'react';
import { useSubmitUpdateFormality } from '@/hooks/useServices';
import { useRouter } from 'next/navigation';
import { Formality } from '@/types/order';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';

interface FormProps {}
const FinishUpdateFlow = () => {
  const {
    formState: { errors },
    handleSubmit,
  } = useFormContext();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { status } = useSession();
  const { FormalityUpdateMutation, isLoading } = useSubmitUpdateFormality();

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
      FormalityUpdateMutation(data);
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
            <Spinner
              color='warning'
              size='lg'
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
export default FinishUpdateFlow;
