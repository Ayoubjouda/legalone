'use client';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import React from 'react';
import Stepper from '@/components/Stepper';
import Pack from '@/components/Pack';

export default function Home() {
  const methods = useForm({
    mode: 'onChange',
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <FormProvider {...methods}>
        <Stepper />
      </FormProvider>
    </div>
  );
}
