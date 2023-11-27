import { RadioField, TextField } from '@/components/Fields';
import TextAreaField from '@/components/Fields/TextAreaField';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';
interface FormProps {
  goToNext: () => void;
}

const DESKTOP_COMPOSITION_VALUES = [
  {
    label: 'Un président et un trésorier (le plus fréquent)',
    value: 'one',
  },
  {
    label: 'Un président, un trésorier et un secrétaire',
    value: 'many',
  },
];
const AssociationDataForm = ({ goToNext }: FormProps) => {
  const { control, trigger, setValue } = useFormContext();
  const handleGoToNext = async () => {
    setValue('managerType', 1);
    const isValid = await trigger([
      'companyName',
      'desktopComposition',
      'descriptionAssociation',
      'managerType',
    ]);
    if (isValid) {
      goToNext();
    }
  };
  return (
    <form className='w-full max-w-[650px]'>
      <div className=' flex flex-col gap-4'>
        <Controller
          name='managerType'
          control={control}
          defaultValue={1 as number}
          render={({ field }) => (
            <input
              className='hidden'
              defaultValue={1}
              {...field}
            />
          )}
        />
        <TextField
          name='companyName'
          label='Nom de votre association'
          control={control}
        />
        <TextAreaField
          name='descriptionAssociation'
          label="Quelle est l'activité de l'association ? "
          control={control}
        />
        <RadioField
          name='desktopComposition'
          control={control}
          values={DESKTOP_COMPOSITION_VALUES}
          label='De combien de membres sera composé le bureau ?'
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
export default AssociationDataForm;
