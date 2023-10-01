'use client';
import { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PersonalForm } from '@/components/Forms';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import CheckoutForm from '@/components/CheckoutForm';
import Checkout from '@/components/Checkout';
import { notFound, useSearchParams } from 'next/navigation';
import useAppStore from '@/zustand/store';
import Image from 'next/image';
interface pageProps {}

export default function Page() {
  const form = useForm();
  const { Order } = useAppStore();
  if (!Order) return notFound();
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg w-full mx-3 flex flex-col gap-4 my-4">
        <Accordion
          type="multiple"
          className="cursor-pointer   tracking-tight  text-lg text-black border bg-white  rounded-md "
          defaultValue={['item-1']}
        >
          <AccordionItem
            value="item-1"
            className="px-3 py-2 "
          >
            <AccordionTrigger className=" font-bold ">
              Show Order Summary
            </AccordionTrigger>
            <AccordionContent>
              <div className="rounded-lg border border-gray-200 w-full flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-[66px] px-8 py-2 bg-black rounded-tl-lg rounded-tr-lg flex-row justify-start items-start gap-2.5 flex">
                  <div className="w-full justify-between items-start inline-flex">
                    <div className="text-white text-2xl font-bold font-['IBM Plex Sans'] leading-[50px]">
                      Votre Commande : {`#${Order.orderId}`}
                    </div>
                  </div>
                  <div className="text-white text-2xl font-bold font-['IBM Plex Sans'] leading-[50px]">
                    299$
                  </div>
                </div>
                <div className="px-8 py-4 w-full flex-col justify-start items-start gap-6 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    <div className="pr-[0.91px] flex-col justify-start items-start inline-flex">
                      <div className="text-black text-lg font-semibold font-['IBM Plex Sans'] leading-normal">
                        Création de {Order.companyType}
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="w-5 h-5 relative" />
                    </div>
                  </div>
                  <div className="flex-col w-full justify-start items-start gap-[3px] flex">
                    <div className="w-full justify-between items-center flex">
                      <div className="text-blue-950 text-base font-bold font-['Helvetica']">
                        Pack {Order.pack.type}
                      </div>
                      <div className="flex-col justify-start items-start inline-flex">
                        <div className="  flex-col justify-start items-end flex">
                          <div className="text-right text-blue-950 text-base font-bold font-['Helvetica']">
                            {Order.pack.price}$
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pl-7 w-full justify-between items-start inline-flex">
                      <div className="flex-col w-full justify-between items-start inline-flex">
                        <div className="flex-col justify-start items-start flex gap-3">
                          {Order.pack.packageDetails?.map(
                            (elem, index: number) => (
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
                            )
                          )}
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
                          {Order.pack.administrativeFees.price}$
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex justify-between w-full  ">
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
              </div> */}
                    {/* <div className="flex w-full justify-between items-start ">
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
              </div> */}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div>
          <p className="text-slate-900 text-xl font-bold font-inter leading-[25px] my-2">
            Payment Detail
          </p>

          <Accordion
            type="multiple"
            className="cursor-pointer  w-full  tracking-tight  text-lg text-black border bg-white  rounded-md  "
            defaultValue={['item-1']}
          >
            <AccordionItem
              value="item-1"
              className="px-3 py-2  w-full"
            >
              <AccordionTrigger className=" font-bold no-underline ">
                Contact
              </AccordionTrigger>
              <AccordionContent className=" w-full flex-col items-start text-start text-base">
                <Form {...form}>
                  <div className="flex w-full  flex-col gap-4">
                    <div className="flex w-full gap-2 ">
                      <FormField
                        name="firstName"
                        control={form.control}
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
                        control={form.control}
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
                      name="email"
                      control={form.control}
                      defaultValue={''}
                      render={({ field }) => (
                        <FormItem className="">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="adresse"
                      control={form.control}
                      defaultValue={''}
                      render={({ field }) => (
                        <FormItem className="">
                          <FormLabel>Adresse</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button className="max-w-sm hover:bg-darkRedish">
                      Valider
                    </Button>
                  </div>
                </Form>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Accordion
          type="multiple"
          className="cursor-pointer w-full tracking-tight  text-lg text-black border bg-white  rounded-md  "
          defaultValue={['item-1']}
        >
          <AccordionItem
            value="item-1"
            className="px-3 py-2 w-full "
          >
            <AccordionTrigger className=" font-bold no-underline ">
              Payment
            </AccordionTrigger>
            <AccordionContent>
              <Checkout />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
