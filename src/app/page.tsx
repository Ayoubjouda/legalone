'use client';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import React from 'react';
import Stepper from '@/components/Stepper';

export default function Home() {
  const methods = useForm({
    mode: 'onChange',
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <FormProvider {...methods}>
        <Stepper />
      </FormProvider>
    </div>
  );
}
