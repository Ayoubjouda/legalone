import { RadioField, TextField } from '@/components/Fields';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
interface FormProps {
  goToNext: () => void;
}
const sexFieldValues = [
  {
    value: 'Male',
    label: 'Homme',
  },
  {
    value: 'Female',
    label: 'Femme',
  },
];

const TresorierForm = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();
  const handleGoToNext = async () => {
    const isValid = await trigger([
      'tresorierFirstName',
      'tresorierLastName',
      'tresorierSex',
    ]);
    if (isValid) {
      goToNext();
    }
  };

  return (
    <form className='w-full max-w-[650px]'>
      <div className='my-5 flex  flex-col  gap-4'>
        <TextField
          name='tresorierFirstName'
          label='Prenom'
          control={control}
        />
        <TextField
          name='tresorierLastName'
          label='Nom'
          control={control}
        />
        <RadioField
          name='tresorierSex'
          label='Sélectionnez votre sexe :'
          values={sexFieldValues}
          control={control}
        />

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
export default TresorierForm;
