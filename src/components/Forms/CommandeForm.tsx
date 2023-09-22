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
import { MoveRight } from 'lucide-react';
import { de } from 'date-fns/locale';
import Image from 'next/image';
interface FormProps {
  goToNext: () => void;
  goToPrevious: () => void;
}

const CommandeForm = ({ goToNext, goToPrevious }: FormProps) => {
  const { getValues } = useFormContext();
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
      <div className="w-full justify-between items-start flex flex-col gap-4 md:flex-row ">
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
                  Création de SARL
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="w-5 h-5 relative" />
              </div>
            </div>
            <div className="flex-col w-full justify-start items-start gap-[3px] flex">
              <div className="w-full justify-between items-center flex">
                <div className="text-blue-950 text-base font-bold font-['Helvetica']">
                  Pack Premium
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="  flex-col justify-start items-end flex">
                    <div className="text-right text-blue-950 text-base font-bold font-['Helvetica']">
                      229 €
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-7 w-full justify-between items-start inline-flex">
                <div className="flex-col w-full justify-between items-start inline-flex">
                  <div className="flex-col justify-start items-start flex gap-3">
                    <div className="pr-[54.46px] justify-start gap-1 inline-flex">
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
                            Immatriculation de votre société à responsabilité
                            limitée
                          </div>
                        </div>
                        <div className=" flex-col justify-start items-start flex">
                          <div className="text-slate-500 text-xs font-normal font-['Helvetica'] leading-none">
                            On s'occupe de tout !
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="justify-start  gap-1 inline-flex">
                      <div className="flex-col justify-start items-start inline-flex">
                        <div className=" flex-col justify-start items-start inline-flex">
                          <Image
                            alt=""
                            src={'/valid.svg'}
                            height={24}
                            width={24}
                          />
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-start items-start flex">
                          <div className="text-blue-950 text-sm font-normal font-['Helvetica'] leading-none">
                            Assistance Legalstart
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start flex">
                          <div className="text-slate-500 text-xs font-normal font-['Helvetica'] leading-none">
                            30 jours gratuits puis 29,90 € HT / mois. Un
                            accompagnement juridique
                            <br />
                            pour ne laisser aucune question sans réponse !
                          </div>
                        </div>
                      </div>
                    </div>
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
                    259,39 €
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full  ">
                <div className="self-stretch flex-col justify-start items-start inline-flex">
                  <div className="text-blue-950 text-sm font-normal font-['Helvetica'] leading-none">
                    Frais de publication légale
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start inline-flex">
                  <div className="text-blue-950 text-xs font-normal font-['Helvetica'] leading-none">
                    197 €
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between items-start ">
                <div className="self-stretch flex-col justify-start items-start inline-flex">
                  <div className="text-blue-950 text-sm font-normal font-['Helvetica'] leading-none">
                    Frais de greffe
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start inline-flex">
                  <div className="text-blue-950 text-xs font-normal font-['Helvetica'] leading-none">
                    197 €
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
                    488,39 €
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
                    85,20 €
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
                    573,59 €
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
            <div className="  bg-orange-600 rounded-md w-full shadow justify-center items-center  inline-flex">
              <Button className="text-center text-white text-base  font-bold font-['Helvetica'] leading-normal">
                Valider
              </Button>
              <div className="  justify-start items-center flex">
                <MoveRight color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandeForm;
