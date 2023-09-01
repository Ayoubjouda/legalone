'use client';
import Stepper from '@/components/Stepper';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  saasFormSchema,
  SaasSchemaType,
} from '@/lib/validators/formValidators';
import { useEffect, useState } from 'react';
import api from '@/lib/axiosConfig';
import useFormPersist from 'react-hook-form-persist';

interface pageProps {}

export default function CreateSaas() {
  const methods = useForm<SaasSchemaType>({
    resolver: zodResolver(saasFormSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      companyType: 'SARL',
      creationDelay: '',
      activityField: {} as Activity,
      president: '',
      associerNumber: '',
      selectedManagerType: '',
      shareCapital: '',
      pack: {} as Package,
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto flex  flex-col items-center justify-center overflow-hidden my-12">
      <FormProvider {...methods}>
        <Stepper />
      </FormProvider>
      {/* <PaymentElement /> */}
    </div>
  );
}
