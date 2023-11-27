'use client';
import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { ChevronRight, MoveRight } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
interface FormProps {
  goToNext: () => void;
}
const modifications = [
  {
    id: '1',
    label: "Changer l'adresse du siège social",
  },
  {
    id: '2',
    label: 'Changer un ou plusieurs dirigeants',
  },
  {
    id: '3',
    label: "Changer l'activité de la société",
  },
  {
    id: '4',
    label: "Faire une cession d'actions",
  },
  {
    id: '5',
    label: 'Modifier le nom de la société',
  },
  {
    id: '6',
    label: 'Modifier la durée de la société',
  },
  {
    id: '7',
    label:
      "Déclarer un changement de situation d'un ou plusieurs dirigeants (ex: changement de domicile, modification du nom)",
  },
];

const RequestedUpdates = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();
  const handleGoToNext = async () => {
    const isValid = await trigger(['otherModification', 'modification']);
    console.log(isValid);
    if (isValid) {
      goToNext();
    }
  };
  return (
    <form className='w-full max-w-[650px]'>
      <div className=' flex flex-col gap-4'>
        <FormField
          control={control}
          name='modification'
          render={() => (
            <FormItem>
              <div className='mb-4'>
                <FormLabel className='text-base'>
                  Quelles sont les modifications que vous souhaitez effectuer ?
                </FormLabel>
              </div>
              {modifications.map((item) => (
                <FormField
                  key={item.id}
                  control={control}
                  name='modification'
                  defaultValue={[]}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className='flex flex-row items-start space-x-3 space-y-0'
                      >
                        <FormControl>
                          <Checkbox
                            checked={value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? onChange([...value, item.id])
                                : onChange(
                                    value?.filter(
                                      (val: string) => val !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <p className='font-bold'>Autres :</p>
        <FormField
          name='otherModification'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Précisez la ou les modification(s) souhaitée(s)
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
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
export default RequestedUpdates;
