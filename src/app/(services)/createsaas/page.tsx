'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  saasFormSchema,
  SaasSchemaType,
} from '@/lib/validators/formValidators';
import { useSearchParams } from 'next/navigation';
import SaasStepper from '@/components/Steppers/SaasStepper';
import React from 'react';

type CompanyForms = {
  [key: string]: typeof saasFormSchema;
};

const companys: CompanyForms = {
  saas: saasFormSchema,
  sarl: saasFormSchema,
};
type Stepper = {
  [key: string]: React.ComponentType;
};
const steppers: Stepper = {
  saas: SaasStepper,
};

export default function CreateSaas() {
  const searchParams = useSearchParams();
  const companyType = searchParams.get('type') || 'saas';

  const FormSchema = companys[companyType] ?? saasFormSchema;
  const SelectedStepper = steppers[companyType] ?? SaasStepper;

  const methods = useForm<SaasSchemaType>({
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
