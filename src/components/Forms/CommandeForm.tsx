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
    <div className="flex w-full items-start gap-3 justify-center">
      <div className="w-full justify-between items-center md:items-start flex flex-col gap-4 md:flex-row ">
        <div className="rounded-lg border w-full border-gray-200 flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-[66px] px-8 py-2 bg-black rounded-tl-lg rounded-tr-lg flex-col justify-start items-start gap-2.5 flex">
            <div className="justify-between items-start inline-flex">
              <div className="text-white text-2xl font-bold font-['IBM Plex Sans'] leading-[50px]">
                Votre Commande{' '}
              </div>
            </div>
          </div>
          <div className="px-8 py-4 w-full flex-col justify-start items-start gap-6 flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="pr-[0.91px] flex-col justify-start items-start inline-flex">
                <div className="text-black text-lg font-semibold font-['IBM Plex Sans'] leading-normal">
                  Création de {companyType}
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="w-5 h-5 relative" />
              </div>
            </div>
            <div className="flex-col w-full justify-start items-start gap-[3px] flex">
              <div className="w-full justify-between items-center flex">
                <div className="text-blue-950 text-base font-bold font-['Helvetica']">
                  Pack {selectedPack.type}
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="  flex-col justify-start items-end flex">
                    <div className="text-right text-blue-950 text-base font-bold font-['Helvetica']">
                      {selectedPack.price}$
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-7 w-full justify-between items-start inline-flex">
                <div className="flex-col w-full justify-between items-start inline-flex">
                  <div className="flex-col justify-start items-start flex gap-3">
                    {selectedPack.packageDetails?.map((elem, index) => (
                      <div
                        key={index}
                        className="pr-[54.46px] justify-start gap-1 inline-flex"
                      >
                        <div className=" flex-col justify-start items-start inline-flex">
                          <Image
                            alt=""
                            src={'/valid.svg'}
                            height={24}
                            width={24}
                          />
                        </div>
                        <div className="flex-col w-full justify-start items-start gap-[5px] inline-flex">
                          <div className=" flex-col w-full justify-start items-start flex">
                            <div className="text-blue-950 w-full text-sm font-normal font-['Helvetica'] leading-none">
                              {elem.text}
                            </div>
                          </div>
                          <div className=" flex-col justify-start items-start flex">
                            <div className="text-slate-500 text-xs font-normal font-['Helvetica'] leading-none">
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
            <div className="flex-col w-full justify-start items-start gap-1 flex">
              <div className="self-stretch  w-full justify-between items-center flex">
                <div className="justify-between items-center flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-blue-950 text-base font-bold font-['Helvetica']">
                      Frais de greffe et de publication légale
                    </div>
                    <div className="w-4 h-4 relative" />
                  </div>
                </div>
                <div className="flex-col  justify-start items-start inline-flex">
                  <div className="text-right text-blue-950 text-base font-bold font-['Helvetica']">
                    {selectedPack.administrativeFees.price}$
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 flex-col  justify-start items-start w-full lg:max-w-md min-w-[400px]">
          <div className="p-4 bg-white bg-opacity-0 rounded-[25px] border border-zinc-100 flex-col justify-start items-start gap-3.5 flex">
            <div className=" flex-col justify-start items-start flex">
              <div className="text-blue-950 text-xl font-bold font-['Helvetica'] leading-10">
                Récapitulatif
              </div>
            </div>
            <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="py-px flex-col justify-start items-start inline-flex">
                  <div className="text-blue-950 text-base font-normal font-['Helvetica']">
                    Total commande HT
                  </div>
                </div>
                <div className=" flex-col justify-start items-start inline-flex">
                  <div className="text-blue-950 text-base font-normal font-['Helvetica']">
                    {selectedPack.price + selectedPack.administrativeFees.price}{' '}
                    €
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-between items-start inline-flex">
                <div className=" justify-between items-start flex">
                  <div className="text-blue-950 text-base font-normal font-['Helvetica']">
                    TVA
                  </div>
                  <div className="w-4 h-4 relative" />
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-blue-950 text-base font-normal font-['Helvetica']">
                    {selectedPack.price * 0.2}$
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-between items-start inline-flex">
                <div className=" flex-col justify-start items-start inline-flex">
                  <div className="text-blue-950 text-base font-normal font-['Helvetica']">
                    Total TTC
                  </div>
                </div>
                <div className=" flex-col justify-start items-start inline-flex">
                  <div className="text-blue-950 text-base font-normal font-['Helvetica']">
                    {selectedPack.price * 1.2}$
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <Input
                  className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex"
                  placeholder="Promo code"
                />
                <Button className="text-white text-sm px-4 py-2 hover:bg-opacity-90 hover:bg-slate-900 bg-slate-900  font-medium font-inter leading-normal">
                  Appliquer
                </Button>
              </div>
            </div>
            <Button
              className="  bg-orange-600 hover:bg-darkRedish gap-2 text-base self-stretch rounded-md w-full shadow justify-center cursor-pointer items-center  inline-flex"
              onClick={handleSubmitOrder}
              type="button"
            >
              Valider
              <div className="  justify-start items-center flex">
                <MoveRight
                  size={24}
                  color="white"
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
