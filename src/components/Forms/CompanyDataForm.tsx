import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';

interface FormProps {
  goToNext: () => void;
  goToPrevious: () => void;
}
const CompanyDataForm = ({ goToNext, goToPrevious }: FormProps) => {
  const { control, trigger } = useFormContext();
  return (
    <form className="w-full max-w-[650px]">
      <div className="my-5 flex flex-col gap-4">
        <p className="text-center text-xl font-medium leading-[31px] text-slate-500">
          Combien y a-t-il d'Associés fondateurs ?
        </p>

        <FormField
          name="associerNumber"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre d'associer</FormLabel>
              <FormControl>
                <Input
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="nonAssociateManager"
          control={control}
          defaultValue={'non'}
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 space-y-0 ">
              <FormLabel className="leading-[20px]">
                Le Président est-il Associé fondateur de la Société ?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="oui" />
                    </FormControl>
                    <FormLabel className="font-semibold">Oui</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="non" />
                    </FormControl>
                    <FormLabel className="font-semibold">Non</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="shareCapital"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Capital social</FormLabel>
              <FormControl>
                <Input
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="font-semibold self-end text-lg "
          type="button"
          size={'lg'}
          onClick={async () => {
            const isValid = await trigger([
              'associerNumber',
              'shareCapital',
              'nonAssociateManager',
            ]);
            console.log(isValid);
            if (isValid) {
              goToNext();
            }
          }}
        >
          Continuer
        </Button>
      </div>
    </form>
  );
};
export default CompanyDataForm;
