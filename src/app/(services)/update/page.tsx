'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import useFormPersist from 'react-hook-form-persist';
import { FormProvider, useForm } from 'react-hook-form';

import {
  UpdateFormSchema,
  UpdateFormSchemaType,
} from '@/lib/validators/modification/modification';
import { createStepper } from '@/components/Steppers/CreateStepper';
import { updateStepper } from '@/components/Steppers/Steps';

export default function Update() {
  const methods = useForm<UpdateFormSchemaType>({
    resolver: zodResolver(UpdateFormSchema),
    mode: 'onBlur',
  });

  useFormPersist('Update', {
    ...methods,
    storage: window.localStorage, // default window.sessionStorage
  });
  const UpdateStepper = createStepper({ steps: updateStepper, path: 'update' });

  return (
    <div className='mx-auto my-12 flex  max-w-screen-xl flex-col items-center justify-center gap-2 overflow-hidden'>
      <FormProvider {...methods}>
        <UpdateStepper />
      </FormProvider>
    </div>
  );
}
