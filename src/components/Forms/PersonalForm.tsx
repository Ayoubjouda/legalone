import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
interface FormProps {
  goToNext: () => void;
  goToPrevious: () => void;
}
const PersonalForm = ({ goToNext }: FormProps) => {
  const { control, trigger } = useFormContext();
  return (
    <form className="max-w-[650px]">
      <div className="my-5 flex flex-col  gap-4">
        <p className="text-center text-sm font-normal leading-tight text-slate-500">
          Ces informations nous permettront de vous assister au cours de votre
          processus de création, et seront nécessaires pour constituer votre
          dossier.
        </p>

        <div className="flex w-full gap-2 ">
          <FormField
            name="firstName"
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Nom</FormLabel>
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
            name="lastName"
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Prénom</FormLabel>
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
        </div>
        <FormField
          name="email"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
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
          name="phone"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input
                  placeholder="shadcn"
                  type="number"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="companyName"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de la Societé</FormLabel>
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
              'firstName',
              'lastName',
              'email',
              'phone',
              'companyName',
            ]);
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
export default PersonalForm;
