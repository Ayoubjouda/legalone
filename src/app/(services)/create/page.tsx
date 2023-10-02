'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  saasFormSchema,
  AutoEntreFormSchema,
} from '@/lib/validators/formValidators';
import { useSearchParams } from 'next/navigation';
import SaasStepper from '@/components/Steppers/SaasStepper';
import React from 'react';
import { ConditionalSchemaType } from '@/types/schema.types';
import AutoEntreStepper from '@/components/Steppers/AutoEntreStepper';
import CompanyTypeForm from '@/components/Forms/CompanyTypeForm';
import { ZodObject } from 'zod';
// type CompanyForms = {
//   [key: string]: typeof saasFormSchema;
// };
type Companys = {
  [key: string]: typeof saasFormSchema | typeof AutoEntreFormSchema;
};
const companys: Companys = {
  SAS: saasFormSchema,
  AUTOENTREPRENEUR: AutoEntreFormSchema,
};
type Stepper = {
  [key: string]: React.ComponentType;
};
const steppers: Stepper = {
  SAS: SaasStepper,
  AUTOENTREPRENEUR: AutoEntreStepper,
};

export default function CreateSaas() {
  const searchParams = useSearchParams();
  const companyType =
    (searchParams.get('type') as CompanyType) || ('SAS' as CompanyType);

  const FormSchema = companys[companyType] ?? saasFormSchema;
  const SelectedStepper = steppers[companyType] ?? CompanyTypeForm;

  const methods = useForm<ConditionalSchemaType<typeof companyType>>({
    resolver: zodResolver(FormSchema),
    mode: 'onBlur',
    defaultValues: {
      companyType: companyType,
      accountingExpert: false,
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto flex  gap-2 flex-col items-center justify-center overflow-hidden my-12">
      <FormProvider {...methods}>
        <SelectedStepper />
      </FormProvider>
    </div>
  );
}
