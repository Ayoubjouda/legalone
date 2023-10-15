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
    <div className='flex justify-center'>
      <div className='mx-3 my-4 flex w-full max-w-screen-lg flex-col gap-4'>
        <Accordion
          type='multiple'
          className='cursor-pointer   rounded-md  border bg-white text-lg tracking-tight  text-black '
          defaultValue={['item-1']}
        >
          <AccordionItem
            value='item-1'
            className='px-3 py-2 '
          >
            <AccordionTrigger className=' font-bold '>
              Show Order Summary
            </AccordionTrigger>
            <AccordionContent>
              <div className='inline-flex w-full flex-col items-start justify-start rounded-lg border border-gray-200'>
                <div className='flex h-[66px] flex-row items-start justify-start gap-2.5 self-stretch rounded-tl-lg rounded-tr-lg bg-black px-8 py-2'>
                  <div className='inline-flex w-full items-start justify-between'>
                    <div className="font-['IBM Plex Sans'] text-2xl font-bold leading-[50px] text-white">
                      Votre Commande : {`#${Order.orderId}`}
                    </div>
                  </div>
                  <div className="font-['IBM Plex Sans'] text-2xl font-bold leading-[50px] text-white">
                    {Order.pack.price + Order.pack.administrativeFees.price}$
                  </div>
                </div>
                <div className='flex w-full flex-col items-start justify-start gap-6 px-8 py-4'>
                  <div className='inline-flex items-center justify-start gap-2'>
                    <div className='inline-flex flex-col items-start justify-start pr-[0.91px]'>
                      <div className="font-['IBM Plex Sans'] text-lg font-semibold leading-normal text-black">
                        {Order.companyType}
                      </div>
                    </div>
                    <div className='inline-flex flex-col items-start justify-start'>
                      <div className='relative h-5 w-5' />
                    </div>
                  </div>
                  <div className='flex w-full flex-col items-start justify-start gap-[3px]'>
                    <div className='flex w-full items-center justify-between'>
                      <div className="font-['Helvetica'] text-base font-bold text-blue-950">
                        Pack {Order.pack.type}
                      </div>
                      <div className='inline-flex flex-col items-start justify-start'>
                        <div className='  flex flex-col items-end justify-start'>
                          <div className="text-right font-['Helvetica'] text-base font-bold text-blue-950">
                            {Order.pack.price}$
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='inline-flex w-full items-start justify-between pl-7'>
                      <div className='inline-flex w-full flex-col items-start justify-between'>
                        <div className='flex flex-col items-start justify-start gap-3'>
                          {Order.pack.packageDetails?.map(
                            (elem, index: number) => (
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
                            )
                          )}
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
          <p className='my-2 font-inter text-xl font-bold leading-[25px] text-slate-900'>
            Payment Detail
          </p>

          <Accordion
            type='multiple'
            className='w-full  cursor-pointer  rounded-md  border bg-white text-lg tracking-tight  text-black'
            defaultValue={['item-1']}
          >
            <AccordionItem
              value='item-1'
              className='w-full px-3  py-2'
            >
              <AccordionTrigger className=' font-bold no-underline '>
                Contact
              </AccordionTrigger>
              <AccordionContent className=' w-full flex-col items-start text-start text-base'>
                <Form {...form}>
                  <div className='flex w-full  flex-col gap-4'>
                    <div className='flex w-full gap-2 '>
                      <FormField
                        name='firstName'
                        control={form.control}
                        defaultValue={''}
                        render={({ field }) => (
                          <FormItem className='w-1/2'>
                            <FormLabel>Nom</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        name='lastName'
                        control={form.control}
                        defaultValue={''}
                        render={({ field }) => (
                          <FormItem className='w-1/2'>
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
                      name='email'
                      control={form.control}
                      defaultValue={''}
                      render={({ field }) => (
                        <FormItem className=''>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name='adresse'
                      control={form.control}
                      defaultValue={''}
                      render={({ field }) => (
                        <FormItem className=''>
                          <FormLabel>Adresse</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button className='max-w-sm hover:bg-darkRedish'>
                      Valider
                    </Button>
                  </div>
                </Form>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Accordion
          type='multiple'
          className='w-full cursor-pointer rounded-md  border bg-white text-lg tracking-tight  text-black  '
          defaultValue={['item-1']}
        >
          <AccordionItem
            value='item-1'
            className='w-full px-3 py-2 '
          >
            <AccordionTrigger className=' font-bold no-underline '>
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
