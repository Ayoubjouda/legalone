'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  saasFormSchema,
  AutoEntreFormSchema,
  AssociationFormSchema,
  SciFormSchema,
  DomiciliationFormSchema,
} from '@/lib/validators/formValidators';
import { useSearchParams } from 'next/navigation';
import SaasStepper from '@/components/Steppers/SaasStepper';
import React from 'react';
import { ConditionalSchemaType } from '@/types/schema.types';
import AutoEntreStepper from '@/components/Steppers/AutoEntreStepper';
import CompanyTypeForm from '@/components/Forms/CompanyType';
import { ZodObject } from 'zod';
import useFormPersist from 'react-hook-form-persist';
import AssociationStepper from '@/components/Steppers/AssociationStepper';
import SciStepper from '@/components/Steppers/SciStepper';
import DomiciliationStepper from '@/components/Steppers/DomiciliationStepper';
// type CompanyForms = {
//   [key: string]: typeof saasFormSchema;
// };

type Companys = {
  [key: string]:
    | typeof saasFormSchema
    | typeof AutoEntreFormSchema
    | typeof AssociationFormSchema
    | typeof DomiciliationFormSchema
    | typeof SciFormSchema;
};
const companys: Companys = {
  SAS: saasFormSchema,
  AUTOENTREPRENEUR: AutoEntreFormSchema,
  ASSOCIATION: AssociationFormSchema,
  SCI: SciFormSchema,
  SARL: saasFormSchema,
  EURL: saasFormSchema,
  SASU: saasFormSchema,
  DOMICILIATION: DomiciliationFormSchema,
};
type Stepper = {
  [key: string]: React.ComponentType;
};
const steppers: Stepper = {
  SAS: SaasStepper,
  AUTOENTREPRENEUR: AutoEntreStepper,
  ASSOCIATION: AssociationStepper,
  SCI: SciStepper,
  SARL: SaasStepper,
  EURL: SaasStepper,
  SASU: SaasStepper,
  DOMICILIATION: DomiciliationStepper,
};

export default function CreateSaas() {
  const searchParams = useSearchParams();
  const companyType =
    (searchParams.get('type') as CompanyEnum) || ('SAS' as CompanyEnum);
  const FormSchema = companys[companyType] ?? saasFormSchema;
  const SelectedStepper = steppers[companyType] ?? CompanyTypeForm;

  const methods = useForm<ConditionalSchemaType<typeof companyType>>({
    resolver: zodResolver(FormSchema),
    mode: 'onBlur',
  });
  useFormPersist(companyType, {
    ...methods,
    storage: window.localStorage, // default window.sessionStorage
  });
  return (
    <div className='mx-auto my-12 flex  max-w-screen-xl flex-col items-center  gap-2 overflow-hidden'>
      <FormProvider {...methods}>
        <SelectedStepper />
      </FormProvider>
    </div>
  );
}
