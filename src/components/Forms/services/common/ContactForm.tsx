import EmailField from '@/components/Fields/EmailField';
import { NumberField } from '@/components/Fields';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

interface FormProps {
  goToNext: () => void;
}
const ContactForm = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();
  const handleGoToNext = async () => {
    const isValid = await trigger(['phone', 'email']);
    if (isValid) {
      goToNext();
    }
  };
  return (
    <form className='w-full max-w-[650px]'>
      <div className=' flex flex-col gap-4'>
        <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
          Email & numero de telephone
        </p>
        <NumberField
          control={control}
          name='phone'
          label='Numero de Telephone'
        />
        <EmailField control={control} />
        <Button
          className='self-end bg-black font-semibold hover:bg-black/80 '
          type='button'
          size={'sm'}
          onClick={handleGoToNext}
        >
          Continuer
          <ChevronRight size={16} />
        </Button>
      </div>
    </form>
  );
};
export default ContactForm;
