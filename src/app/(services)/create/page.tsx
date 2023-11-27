'use client';
import CompanyTypeForm from '@/components/Forms/services/common/CompanyType';
import { createStepper } from '@/components/Steppers/CreateStepper';
import {
  associationSteps,
  autoEntreSteps,
  domiciliationSteps,
  saasSteps,
  sciSteps,
} from '@/components/Steppers/Steps';
import {
  AssociationFormSchema,
  AutoEntreFormSchema,
  EntrepriseFormSchema,
  SciFormSchema,
} from '@/lib/validators/creation';
import { DomiciliationFormSchema } from '@/lib/validators/domiciliation/domiciliation';
import { ConditionalSchemaType } from '@/types/schema.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
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
const PATH = 'create';
const steppers: Stepper = {
  SAS: createStepper({ steps: saasSteps, path: PATH }),
  AUTOENTREPRISE: createStepper({ steps: autoEntreSteps, path: PATH }),
  ASSOCIATION: createStepper({ steps: associationSteps, path: PATH }),
  SCI: createStepper({ steps: sciSteps, path: PATH }),
  SARL: createStepper({ steps: saasSteps, path: PATH }),
  EURL: createStepper({ steps: saasSteps, path: PATH }),
  SASU: createStepper({ steps: saasSteps, path: PATH }),
  DOMICILIATION: createStepper({ steps: domiciliationSteps, path: PATH }),
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
