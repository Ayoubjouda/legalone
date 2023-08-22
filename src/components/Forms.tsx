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
import Pack from './Pack';
import { useQuery } from 'react-query';
import api from '@/lib/axiosConfig';
import { Spinner } from '@chakra-ui/react';

const DetailItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex min-w-[300px] items-center justify-between">
      <p className="text-base font-semibold leading-none text-black">{title}</p>
      <p className="text-base font-normal leading-none text-zinc-600">
        {value}
      </p>
    </div>
  );
};

export const FormOne = () => {
  const { control } = useFormContext();

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
          name="phoneNumber"
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
      </div>
    </form>
  );
};

export const FormTwo = () => {
  const { setValue, control } = useFormContext();
  const [selected, setselected] = useState<number | null>(null);
  const handleSetValue = (newValue: string) => {
    setValue('creationDelay', newValue);
  };

  return (
    <form className="flex gap-10">
      <div className="hidden">
        <Controller
          name="creationDelay"
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
  const { setValue, control } = useFormContext();
  const [selectedDomain, setselectedDomain] = useState<number | null>(null);
  const [selectedPresident, setselectedPresident] = useState<string | null>(
    null
  );
  const { isLoading, data } = useQuery('packs', async () => {
    const data = (await api
      .get('activity')
      .then((res) => res.data)) as Activity[];
    return data;
  });

  const handleSetValue = (newValue: string) => {
    setValue('domaine', newValue);
  };
  if (isLoading) return <Spinner color="orange.500" />;
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
          {data ? (
            data?.map((item: Activity, idx: number) => (
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
                {item.name}
              </Button>
            ))
          ) : (
            <p>No Data Found Please Refresh the page</p>
          )}
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
          <Button
            variant={'ghost'}
            className={cn(
              { 'bg-orange-200': 'moi' == selectedPresident },
              'border  text-xl font-semibold'
            )}
            type="button"
            onClick={() => {
              handleSetValue('moi');
              setselectedPresident('moi');
            }}
          >
            Moi
          </Button>
          <Button
            variant={'ghost'}
            className={cn(
              { 'bg-orange-200': 'president' == selectedPresident },
              'border  text-xl font-semibold'
            )}
            type="button"
            onClick={() => {
              handleSetValue('president');
              setselectedPresident('president');
            }}
          >
            president
          </Button>
        </div>
      </div>
    </form>
  );
};

export const FormFour = () => {
  const { control } = useFormContext();
  return (
    <form className="w-full max-w-[650px]">
      <div className="my-5 flex flex-col gap-4">
        <p className="text-center text-sm font-normal leading-tight text-slate-500">
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
          name="fondateur"
          control={control}
          defaultValue={'non'}
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
          name="capital"
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
          name="siegeSocial"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                siège social
                <span className="text-sm font-medium leading-tight text-slate-900 text-opacity-50">
                  (L’adresse de votre société)
                </span>
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

export const FormFive = () => {
  const { watch, register, control, setValue } = useFormContext();

  const { isLoading, data } = useQuery('packs', async () => {
    const data = (await api
      .get('package/getAllPackage')
      .then((res) => res.data)) as Package[];
    return data;
  });

  const watchAllFields = watch();
  const handleSetValue = (newValue: Package) => {
    setValue('pack', newValue);
  };
  if (isLoading) return <Spinner color="orange.500" />;
  return (
    <form className="w-full ">
      <div className="hidden">
        <Controller
          name="pack"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
          rules={{ required: true }}
        />
      </div>
      <div className="flex w-full gap-10 ">
        {data?.map((item: Package, idx: number) => (
          <Pack
            key={idx}
            description={item.description}
            name={item.name}
            price={item.price}
            elements={item.elements}
            type={item.type}
            onButtonClick={() => handleSetValue(item)}
          />
        ))}
      </div>
    </form>
  );
};
export const FormSix = () => {
  const { watch, register, control, getValues } = useFormContext();

  // const watchAllFields = watch();
  const values = getValues();

  return (
    <form className="flex w-full gap-3 ">
      <div className="flex flex-col ">
        <h3 className="text-lg font-semibold leading-none text-black">
          Details
        </h3>
        <div className="mt-4 flex gap-3 rounded-sm bg-gray-100">
          <div className="flex flex-col gap-3 p-2">
            <DetailItem
              title={'Prenom'}
              value={values.firstName}
            />
            <DetailItem
              title={'Email'}
              value={values.email}
            />
            <DetailItem
              title={'Nom Société'}
              value={values.NameSociete}
            />
            <DetailItem
              title={'Délai de Creation'}
              value={values.creationDelay}
            />
            <DetailItem
              title={'Nombre D’associer'}
              value={values.associerNumber}
            />
            <DetailItem
              title={'Siege Social'}
              value={values.SiegeSocial}
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-3 p-2">
              <DetailItem
                title={'Nom'}
                value={values.firstName}
              />
              <DetailItem
                title={'Tel'}
                value={values.PhoneNumber}
              />
              <DetailItem
                title={'Status'}
                value={values.Status}
              />
              <DetailItem
                title={'domaine'}
                value={values.firstName}
              />
              <DetailItem
                title={'capital'}
                value={values.firstName}
              />
            </div>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-none text-black">
          Pricing Details
        </h3>
        <div className="mt-4 flex w-fit gap-3 rounded-sm bg-gray-100">
          <div className="flex flex-col gap-3 p-2">
            {[1, 2, 3].map((item, idx) => (
              <div
                key={idx}
                className="flex min-w-[300px] items-center justify-between"
              >
                <p className="text-base font-semibold leading-none text-black">
                  Subtotal
                </p>
                <p className="text-base font-normal leading-none text-zinc-600">
                  88 $
                </p>
              </div>
            ))}
            <Button> Payer en toute Securité</Button>
          </div>
        </div>
      </div>
      <Pack {...values.pack} />
    </form>
  );
};
