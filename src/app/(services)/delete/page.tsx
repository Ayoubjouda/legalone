'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import useFormPersist from 'react-hook-form-persist';
import { FormProvider, useForm } from 'react-hook-form';
import DeleteStepper from '@/components/Steppers/DeleteStepper';
import {
  DissolutionFormSchema,
  DissolutionFormSchemaType,
} from '@/lib/validators/fermeture/dissolution';

export default function Delete() {
  const methods = useForm<DissolutionFormSchemaType>({
    resolver: zodResolver(DissolutionFormSchema),
    mode: 'onBlur',
  });

  useFormPersist('Delete', {
    ...methods,
    storage: window.localStorage, // default window.sessionStorage
  });

  return (
    <div className='mx-auto my-12 flex  max-w-screen-xl flex-col items-center justify-center gap-2 overflow-hidden'>
      <FormProvider {...methods}>
        <DeleteStepper />
      </FormProvider>
    </div>
  );
}
