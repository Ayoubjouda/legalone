'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EntrepriseFormSchema,
  AutoEntreFormSchema,
  AssociationFormSchema,
  SciFormSchema,
} from '@/lib/validators/creation';
import { DomiciliationFormSchema } from '@/lib/validators/domiciliation/domiciliation';
import { useSearchParams } from 'next/navigation';
import SaasStepper from '@/components/Steppers/SaasStepper';
import React from 'react';
import { ConditionalSchemaType } from '@/types/schema.types';
import AutoEntreStepper from '@/components/Steppers/AutoEntreStepper';
import CompanyTypeForm from '@/components/Forms/services/common/CompanyType';
import useFormPersist from 'react-hook-form-persist';
import AssociationStepper from '@/components/Steppers/AssociationStepper';
import SciStepper from '@/components/Steppers/SciStepper';
import DomiciliationStepper from '@/components/Steppers/DomiciliationStepper';

type Companys = {
  [key: string]:
    | typeof EntrepriseFormSchema
    | typeof AutoEntreFormSchema
    | typeof AssociationFormSchema
    | typeof DomiciliationFormSchema
    | typeof SciFormSchema;
};
const companys: Companys = {
  SAS: EntrepriseFormSchema,
  AUTOENTREPRISE: AutoEntreFormSchema,
  ASSOCIATION: AssociationFormSchema,
  SCI: SciFormSchema,
  SARL: EntrepriseFormSchema,
  EURL: EntrepriseFormSchema,
  SASU: EntrepriseFormSchema,
  DOMICILIATION: DomiciliationFormSchema,
};
type Stepper = {
  [key: string]: React.ComponentType;
};
const steppers: Stepper = {
  SAS: SaasStepper,
  AUTOENTREPRISE: AutoEntreStepper,
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
  const FormSchema = companys[companyType] ?? EntrepriseFormSchema;
  const SelectedStepper = steppers[companyType] ?? CompanyTypeForm;

  const methods = useForm<ConditionalSchemaType<typeof companyType>>({
    resolver: zodResolver(FormSchema),
    mode: 'onBlur',
    defaultValues: {},
  });
  useFormPersist(companyType, {
    ...methods,
    storage: window.localStorage, // default window.sessionStorage
  });
  return (
    <div className='relative mx-auto my-12 flex w-full  max-w-screen-xl flex-col items-center  gap-2 overflow-hidden'>
      <FormProvider {...methods}>
        <SelectedStepper />
      </FormProvider>
    </div>
  );
}
