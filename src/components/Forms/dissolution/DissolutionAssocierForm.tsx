import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
interface FormProps {
  goToNext: () => void;
}
const DissolutionAssocierForm = ({ goToNext }: FormProps) => {
  const { control, trigger, getValues } = useFormContext();
  const values = getValues();
  return (
    <form className="max-w-[650px]">
      <div className="my-5 flex flex-col  gap-4">
        <p className="text-center text-xl font-medium leading-[31px] text-slate-500">
          Les associés
        </p>
        <p className="text-center text-sm font-normal leading-tight text-slate-500">
          Ces informations nous permettront de vous assister au cours de votre
          processus de création, et seront nécessaires pour constituer votre
          dossier.
        </p>

        <FormField
          name="declaration"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <FormItem className="flex flex-col gap-3 space-y-0 ">
              <FormLabel className="leading-[20px]">
                Cet associé est :
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    if (value === 'True') {
                      onChange(true);
                    } else {
                      onChange(false);
                    }
                  }}
                  defaultValue={value === true ? 'True' : 'False'}
                  className="flex"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="True" />
                    </FormControl>
                    <FormLabel className="font-semibold">
                      Un particulier
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="True" />
                    </FormControl>
                    <FormLabel className="font-semibold">Une société</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="declaration"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <FormItem className="flex flex-col gap-3 space-y-0 ">
              <FormLabel className="leading-[20px]">
                Le liquidateur tiers est :
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    if (value === 'True') {
                      onChange(true);
                    } else {
                      onChange(false);
                    }
                  }}
                  defaultValue={value === true ? 'True' : 'False'}
                  className="flex"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="True" />
                    </FormControl>
                    <FormLabel className="font-semibold">
                      Un particulier (le plus fréquent)
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="False" />
                    </FormControl>
                    <FormLabel className="font-semibold">Une société</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full gap-2 ">
          <FormField
            name="firstName"
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={control}
          name="civilite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Civilité</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="selectioner votre civilité" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="madame">madame</SelectItem>
                  <SelectItem value="monsieur">monsieur</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="compyName"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Nom de la société</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="FormeSocial"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Forme Social</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Forme Social" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="madame">madame</SelectItem>
                  <SelectItem value="monsieur">monsieur</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="font-semibold self-end text-lg hover:bg-darkRedish"
          type="button"
          size={'lg'}
          onClick={async () => {
            const isValid = await trigger([
              'firstName',
              'lastName',
              'declaration',
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
export default DissolutionAssocierForm;
