import React, { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import IconBox from '../IconBox';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import Pack from '../Pack';
import { useQuery } from 'react-query';
import api from '@/lib/axiosConfig';
import { Spinner } from '@chakra-ui/react';
import Checkout from '../Checkout';
import { ErrorMessage } from '@hookform/error-message';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import useAppStore from '@/zustand/store';
import { useRouter } from 'next/navigation';
interface FormProps {
  goToNext: () => void;
  goToPrevious: () => void;
}

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

export const FormSix = ({ goToNext, goToPrevious }: FormProps) => {
  const { watch, register, control, getValues } = useFormContext();
  const router = useRouter();
  const { accessToken } = useAppStore();
  // const watchAllFields = watch();
  const values = getValues();

  const handleCheckout = () => {
    localStorage.setItem('intendedDestination', '/createsaas');
    router.push('/login');
  };

  return (
    <div className="flex w-full items-start gap-3 justify-center">
      <div className="flex flex-col  ">
        <h3 className="text-lg font-semibold leading-none text-black">
          Details
        </h3>
        <div className="mt-4 flex flex-col md:flex-row  justify-center gap-3 rounded-sm bg-gray-100">
          <div className="flex flex-col  gap-3 p-2">
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
              value={values.companyName}
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
              value={values.headquarter?.headquarter}
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
                value={values.phone}
              />
              <DetailItem
                title={'Status'}
                value={values.companyType}
              />
              <DetailItem
                title={'Domaine'}
                value={values.activityField?.name}
              />
              <DetailItem
                title={'Capital'}
                value={values.shareCapital}
              />
              <DetailItem
                title={'Pack'}
                value={values.pack?.name}
              />
            </div>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-none text-black">
          Pricing Details
        </h3>
        <div className="mt-4 flex w-fit gap-3 rounded-sm bg-gray-100">
          <div className="flex flex-col gap-3 p-2">
            <div className="flex min-w-[300px] items-center justify-between">
              <p className="text-base font-semibold leading-none text-black">
                Subtotal
              </p>
              <p className="text-base font-normal leading-none text-zinc-600">
                {values.pack?.price} $
              </p>
            </div>
            <div className="flex min-w-[300px] items-center justify-between">
              <p className="text-base font-semibold leading-none text-black">
                Tax
              </p>
              <p className="text-base font-normal leading-none text-zinc-600">
                {Number(values.pack?.price * 0.2).toFixed(2)} $
              </p>
            </div>
            <div className="flex min-w-[300px] items-center justify-between">
              <p className="text-base font-semibold leading-none text-black">
                Total
              </p>
              <p className="text-base font-normal leading-none text-zinc-600">
                {Number(values.pack?.price * 1.2).toFixed(2)} $
              </p>
            </div>
            {accessToken ? (
              <Dialog>
                <DialogTrigger>
                  <Button className="w-full">Procéder au paiement</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogDescription>
                      <Checkout />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ) : (
              <Button
                onClick={handleCheckout}
                className="w-full"
              >
                Procéder au paiement
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
