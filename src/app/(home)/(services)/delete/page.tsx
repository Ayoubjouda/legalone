'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  saasFormSchema,
  AutoEntreFormSchema,
  AssociationFormSchema,
  SciFormSchema,
} from '@/lib/validators/formValidators';
import SaasStepper from '@/components/Steppers/SaasStepper';
import React from 'react';
import { ConditionalSchemaType } from '@/types/schema.types';
import AutoEntreStepper from '@/components/Steppers/AutoEntreStepper';
import CompanyTypeForm from '@/components/Forms/CompanyType';
import { ZodObject } from 'zod';
import useFormPersist from 'react-hook-form-persist';
import AssociationStepper from '@/components/Steppers/AssociationStepper';
import SciStepper from '@/components/Steppers/SciStepper';
import { FormProvider, useForm } from 'react-hook-form';
import DeleteStepper from '@/components/Steppers/DeleteStepper';
import {
  DissolutionFormSchema,
  DissolutionFormSchemaType,
} from '@/lib/validators/formValidators';
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
