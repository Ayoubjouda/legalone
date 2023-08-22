'use client';
import Stepper from '@/components/Stepper';
import { FormProvider, useForm } from 'react-hook-form';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  saasFormSchema,
  SaasSchemaType,
} from '@/lib/validators/formValidators';
import { useEffect, useState } from 'react';
import api from '@/lib/axiosConfig';
interface pageProps {}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CreateSaas() {
  const methods = useForm<SaasSchemaType>({
    resolver: zodResolver(saasFormSchema),
    mode: 'onBlur',
  });
  return (
    <div className="max-w-screen flex w-full flex-col items-center justify-center overflow-hidden">
      <FormProvider {...methods}>
        <Stepper />
      </FormProvider>
      {/* <PaymentElement /> */}
    </div>
  );
}
