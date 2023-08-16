import React, { useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import IconBox from './IconBox';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
export const FormOne = () => {
  const { watch, register, control } = useFormContext();

  const watchAllFields = watch();
  return (
    <form className="max-w-[650px]">
      <div className="my-5 flex flex-col gap-4">
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
          name="Email"
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
          name="Phone number"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
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
          name="Nom de la Societé"
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
      </div>
    </form>
  );
};

export const FormTwo = () => {
  const { setValue, watch, control } = useFormContext();
  const [selected, setselected] = useState<number | null>(null);
  const handleSetValue = (newValue: string) => {
    setValue('tv', newValue);
  };

  return (
    <form className="flex gap-10">
      <div className="hidden">
        <Controller
          name="tv"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>

      <>
        <IconBox
          title="Dans un mois"
          image={'/fast.svg'}
          onClick={() => {
            handleSetValue('Dans un mois');
            setselected(1);
          }}
          className={cn({ 'border-orange-500': selected === 1 })}
        />
        <IconBox
          title="Dans la Semaine"
          image={'/calander.svg'}
          onClick={() => {
            handleSetValue('Dans un b');
            setselected(2);
          }}
          className={cn({ 'border-orange-500': selected === 2 })}
        />
        <IconBox
          title="Je ne sais pas encore"
          image={'/doubt.svg'}
          onClick={() => {
            handleSetValue('je ne sais pas');
            setselected(3);
          }}
          className={cn({ 'border-orange-500': selected === 3 })}
        />
      </>
    </form>
  );
};

export const FormThree = () => {
  const { setValue, watch, control } = useFormContext();
  const [selectedDomain, setselectedDomain] = useState<number | null>(null);
  const [selectedPresident, setselectedPresident] = useState<number | null>(
    null
  );
  const watchAllFields = watch();
  console.log(watchAllFields);
  const handleSetValue = (newValue: string) => {
    setValue('domaine', newValue);
  };
  return (
    <form className="flex max-w-[850px] flex-col gap-10">
      <div className="flex flex-col gap-10">
        <div className="hidden">
          <Controller
            name="domaine"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
            rules={{ required: true }}
          />
        </div>
        <p className="text-center text-xl font-medium leading-[31px] text-slate-500">
          Quel est votre domaine d'activité ?
        </p>

        <div className="flex  flex-wrap gap-10">
          {[1, 2, 3, 4, 5, 5, 5].map((item, idx) => (
            <Button
              variant={'ghost'}
              className={cn(
                { 'bg-orange-200': idx == selectedDomain },
                'border  text-xl font-semibold'
              )}
              key={idx}
              type="button"
              onClick={() => {
                handleSetValue('consultant');
                setselectedDomain(idx);
              }}
            >
              consultant
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="hidden">
          <Controller
            name="president"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
            rules={{ required: true }}
          />
        </div>
        <p className="text-center text-xl font-medium leading-[31px] text-slate-500">
          Qui sera président de la société ?
        </p>

        <div className="flex gap-x-10">
          {[1, 2].map((item, idx) => (
            <Button
              variant={'ghost'}
              className={cn(
                { 'bg-orange-200': idx == selectedPresident },
                'border  text-xl font-semibold'
              )}
              key={idx}
              type="button"
              onClick={() => {
                handleSetValue('president');
                setselectedPresident(idx);
              }}
            >
              Moi
            </Button>
          ))}
        </div>
      </div>
    </form>
  );
};

export const FormFour = () => {
  const { watch, register, control } = useFormContext();

  const watchAllFields = watch();
  return (
    <form className="w-full max-w-[650px]">
      <div className="my-5 flex flex-col gap-4">
        <p className="text-center text-sm font-normal leading-tight text-slate-500">
          Combien y a-t-il d'Associés fondateurs ?
        </p>

        <FormField
          name="Email"
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
          name="fondateur"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 space-y-0 ">
              <FormLabel>
                Le Président est-il Associé fondateur de la Société ?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex  "
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
          name="Phone number"
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
        <FormField
          name="Nom de la Societé"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                siège social{' '}
                <span className="text-sm font-medium leading-tight text-slate-900 text-opacity-50">
                  {' '}
                  (L’adresse de votre société)
                </span>{' '}
              </FormLabel>
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
    </form>
  );
};
