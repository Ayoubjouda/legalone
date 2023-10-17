'use client';
import { useFormContext } from 'react-hook-form';
import { Spinner } from '@nextui-org/react';
import { useRef, useEffect } from 'react';
import { useSubmitFormality } from '@/hooks/useServices';
import { useRouter } from 'next/navigation';
import useAppStore from '@/zustand/store';
import { Formality } from '@/types/order';
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
  const { setFormality } = useAppStore();
  useEffect(() => {
    // Check if the button reference is not null
    if (buttonRef.current) {
      // Trigger a click on the button
      buttonRef.current.click();
    }
  }, []);
  const onSubmit = async (data: Formality) => {
    console.log(data);
    setFormality(data);
    router.push('/formality');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center justify-center gap-10'
    >
      <button
        ref={buttonRef}
        type='submit'
        className='hidden'
      >
        submit
      </button>
      <div>test</div>
    </form>
  );
};
export default FinishFlow;
