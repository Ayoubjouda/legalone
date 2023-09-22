'use client';
import Stepper from '@/components/Stepper';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  saasFormSchema,
  SaasSchemaType,
} from '@/lib/validators/formValidators';

interface pageProps {}

export default function CreateSaas() {
  const methods = useForm<SaasSchemaType>({
    resolver: zodResolver(saasFormSchema),
    mode: 'onBlur',
  });

  return (
    <div className="max-w-screen-xl mx-auto flex  gap-2 flex-col items-center justify-center overflow-hidden my-12">
      <FormProvider {...methods}>
        <Stepper />
      </FormProvider>
    </div>
  );
}
