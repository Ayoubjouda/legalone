'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Input } from '../ui/input';
import { Button } from '../ui/button';

import useAppStore from '@/zustand/store';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import api from '@/lib/axiosConfig';
import { OrderType } from '@/types/order';

const CommandeForm = () => {
  const searchParams = useSearchParams();
  const companyType: CompanyEnum =
    (searchParams.get('type') as CompanyEnum) || ('SAS' as CompanyEnum);
  const { getValues } = useFormContext();
  const pathname = usePathname();
  const router = useRouter();
  const { setOrder } = useAppStore();
  const values = getValues();
  const selectedPack: Package = values?.pack;

  const handleSubmitOrder = async () => {
    const accessToken: string | null = localStorage.getItem('accessToken');
    if (!accessToken) {
      await localStorage.setItem(
        'intendedDestination',
        pathname + window.location.search
      );
      router.push('/login');
    } else {
      api
        .post('/order/company-creation', { description: 'test' })
        .then((res) => {
          console.log(res);
          const Order: OrderType = {
            orderId: Number(res.data.id),
            ...values,
          } as OrderType;
          setOrder(Order);
          router.push(`/checkout`);
        });
    }
  };

  if (!values?.pack) return null;
  return (
    <div className='flex w-full items-start justify-center gap-3'>
      <div className='flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start '>
        <div className='inline-flex w-full flex-col items-start justify-start rounded-lg border border-gray-200'>
          <div className='flex h-[66px] flex-col items-start justify-start gap-2.5 self-stretch rounded-tl-lg rounded-tr-lg bg-black px-8 py-2'>
            <div className='inline-flex items-start justify-between'>
              <div className="font-['IBM Plex Sans'] text-2xl font-bold leading-[50px] text-white">
                Votre Commande{' '}
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col items-start justify-start gap-6 px-8 py-4'>
            <div className='inline-flex items-center justify-start gap-2'>
              <div className='inline-flex flex-col items-start justify-start pr-[0.91px]'>
                <div className="font-['IBM Plex Sans'] text-lg font-semibold leading-normal text-black">
                  Création de {companyType}
                </div>
              </div>
              <div className='inline-flex flex-col items-start justify-start'>
                <div className='relative h-5 w-5' />
              </div>
            </div>
            <div className='flex w-full flex-col items-start justify-start gap-[3px]'>
              <div className='flex w-full items-center justify-between'>
                <div className="font-['Helvetica'] text-base font-bold text-blue-950">
                  Pack {selectedPack.type}
                </div>
                <div className='inline-flex flex-col items-start justify-start'>
                  <div className='  flex flex-col items-end justify-start'>
                    <div className="text-right font-['Helvetica'] text-base font-bold text-blue-950">
                      {selectedPack.price}$
                    </div>
                  </div>
                </div>
              </div>
              <div className='inline-flex w-full items-start justify-between pl-7'>
                <div className='inline-flex w-full flex-col items-start justify-between'>
                  <div className='flex flex-col items-start justify-start gap-3'>
                    {selectedPack.packageDetails?.map((elem, index) => (
                      <div
                        key={index}
                        className='inline-flex justify-start gap-1 pr-[54.46px]'
                      >
                        <div className=' inline-flex flex-col items-start justify-start'>
                          <Image
                            alt=''
                            src={'/valid.svg'}
                            height={24}
                            width={24}
                          />
                        </div>
                        <div className='inline-flex w-full flex-col items-start justify-start gap-[5px]'>
                          <div className=' flex w-full flex-col items-start justify-start'>
                            <div className="w-full font-['Helvetica'] text-sm font-normal leading-none text-blue-950">
                              {elem.text}
                            </div>
                          </div>
                          <div className=' flex flex-col items-start justify-start'>
                            <div className="font-['Helvetica'] text-xs font-normal leading-none text-slate-500">
                              {elem.detail}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-full flex-col items-start justify-start gap-1'>
              <div className='flex  w-full items-center justify-between self-stretch'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center justify-start gap-2'>
                    <div className="font-['Helvetica'] text-base font-bold text-blue-950">
                      Frais de greffe et de publication légale
                    </div>
                    <div className='relative h-4 w-4' />
                  </div>
                </div>
                <div className='inline-flex  flex-col items-start justify-start'>
                  <div className="text-right font-['Helvetica'] text-base font-bold text-blue-950">
                    {selectedPack.administrativeFees.price}$
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full min-w-[400px]  flex-col items-start justify-start px-8 lg:max-w-md'>
          <div className='flex flex-col items-start justify-start gap-3.5 rounded-[25px] border border-zinc-100 bg-white bg-opacity-0 p-4'>
            <div className=' flex flex-col items-start justify-start'>
              <div className="font-['Helvetica'] text-xl font-bold leading-10 text-blue-950">
                Récapitulatif
              </div>
            </div>
            <div className='flex  flex-col items-start justify-start gap-2 self-stretch'>
              <div className='inline-flex items-start justify-between self-stretch'>
                <div className='inline-flex flex-col items-start justify-start py-px'>
                  <div className="font-['Helvetica'] text-base font-normal text-blue-950">
                    Total commande HT
                  </div>
                </div>
                <div className=' inline-flex flex-col items-start justify-start'>
                  <div className="font-['Helvetica'] text-base font-normal text-blue-950">
                    {selectedPack.price + selectedPack.administrativeFees.price}{' '}
                    €
                  </div>
                </div>
              </div>
              <div className='inline-flex items-start justify-between self-stretch'>
                <div className=' flex items-start justify-between'>
                  <div className="font-['Helvetica'] text-base font-normal text-blue-950">
                    TVA
                  </div>
                  <div className='relative h-4 w-4' />
                </div>
                <div className='inline-flex flex-col items-start justify-start'>
                  <div className="font-['Helvetica'] text-base font-normal text-blue-950">
                    {selectedPack.price * 0.2}$
                  </div>
                </div>
              </div>
              <div className='inline-flex items-start justify-between self-stretch'>
                <div className=' inline-flex flex-col items-start justify-start'>
                  <div className="font-['Helvetica'] text-base font-normal text-blue-950">
                    Total TTC
                  </div>
                </div>
                <div className=' inline-flex flex-col items-start justify-start'>
                  <div className="font-['Helvetica'] text-base font-normal text-blue-950">
                    {selectedPack.price * 1.2}$
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-1.5 self-stretch'>
              <div className='inline-flex items-start justify-start gap-2 self-stretch'>
                <Input
                  className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1.5'
                  placeholder='Promo code'
                />
                <Button className='bg-slate-900 px-4 py-2 font-inter text-sm font-medium leading-normal  text-white hover:bg-slate-900 hover:bg-opacity-90'>
                  Appliquer
                </Button>
              </div>
            </div>
            <Button
              className='  inline-flex w-full cursor-pointer items-center justify-center gap-2 self-stretch rounded-md bg-orange-600 text-base shadow  hover:bg-darkRedish'
              onClick={handleSubmitOrder}
              type='button'
            >
              Valider
              <div className='  flex items-center justify-start'>
                <MoveRight
                  size={24}
                  color='white'
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandeForm;
