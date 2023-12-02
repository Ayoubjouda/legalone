'use client';
import { createStepper } from '@/components/Steppers/CreateStepper';
import { deleteStepper } from '@/components/Steppers/Steps';
import {
  DissolutionFormSchema,
  DissolutionFormSchemaType,
} from '@/lib/validators/fermeture/dissolution';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

const DeleteStepper = createStepper({ steps: deleteStepper, path: 'delete' });

export default function Delete() {
  const methods = useForm<DissolutionFormSchemaType>({
    resolver: zodResolver(DissolutionFormSchema),
    mode: 'onBlur',
    defaultValues: {},
  });

  useFormPersist('Delete', {
    ...methods,
    storage: window.localStorage, // default window.sessionStorage
  });

  return (
    <div className='relative mx-auto my-12 flex  max-w-screen-xl flex-col items-center justify-center gap-2 overflow-hidden'>
      <FormProvider {...methods}>{<DeleteStepper />}</FormProvider>
    </div>
  );
}
