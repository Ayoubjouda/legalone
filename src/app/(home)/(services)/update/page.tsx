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
import UpdateStepper from '@/components/Steppers/UpdateStepper';
import {
  UpdateFormSchema,
  UpdateFormSchemaType,
} from '@/lib/validators/formValidators';
export default function Update() {
  const methods = useForm<UpdateFormSchemaType>({
    resolver: zodResolver(UpdateFormSchema),
    mode: 'onBlur',
    defaultValues: {
      modifications: [],
    },
  });
  useFormPersist('Update', {
    ...methods,
    storage: window.localStorage, // default window.sessionStorage
  });
  return (
    <div className="max-w-screen-xl mx-auto flex  gap-2 flex-col items-center justify-center overflow-hidden my-12">
      <FormProvider {...methods}>
        <UpdateStepper />
      </FormProvider>
    </div>
  );
}
