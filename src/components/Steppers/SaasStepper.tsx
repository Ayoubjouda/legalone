'use client';
import { FC, useEffect } from 'react';
import {
  Step,
  StepSeparator,
  Stepper as ChakraStepper,
  useSteps,
} from '@chakra-ui/react';
import { Button } from '../ui/button';
import {
  PersonalForm,
  DurationForm,
  ActivityForm,
  ManagerForm,
  CompanyDataForm,
  HeadquarterForm,
  CommandeForm,
} from '@/components/Forms';
import { ChevronLeft } from 'lucide-react';
import useFormPersist from 'react-hook-form-persist';
import { useFormContext } from 'react-hook-form';
import useAppStore from '@/zustand/store';
import PackForm from '../Forms/PackForm';
import ContactForm from '../Forms/ContactForm';
import { useRouter, useSearchParams } from 'next/navigation';
interface StepperProps {}
const steps = [
  { title: 'First', description: 'CHOIX DES STATUTS' },
  { title: 'Second', description: 'CRÉATION DE SASU' },
  { title: 'Third', description: 'PROJET' },
  { title: 'Third', description: 'CHOIX DU PLAN' },
  { title: 'Third', description: 'Headquarter' },
  { title: 'Third', description: 'Récapitulatif' },
  { title: 'Third', description: 'Récapitulatif' },
  { title: 'Third', description: 'Récapitulatif' },
];
const SaasStepper: FC<StepperProps> = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const companyType =
    (searchParams.get('type') as CompanyEnum) || ('SAS' as CompanyEnum);
  const currentStep = searchParams.get('step') ?? 0;
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: Number(currentStep),
    count: steps.length,
  });

  const { watch, setValue } = useFormContext();

  const handleGoToNext = () => {
    router.push(`/create?type=${companyType}&step=${activeStep + 1}`);
    goToNext();
  };
  const handleGoToPrevious = () => {
    router.push(`/create?type=${companyType}&step=${activeStep - 1}`);
    goToPrevious();
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <DurationForm goToNext={handleGoToNext} />;
      case 1:
        return <ActivityForm goToNext={handleGoToNext} />;
      case 2:
        return <ManagerForm goToNext={handleGoToNext} />;
      case 3:
        return <PersonalForm goToNext={handleGoToNext} />;
      case 4:
        return <CompanyDataForm goToNext={handleGoToNext} />;
      case 5:
        return <ContactForm goToNext={handleGoToNext} />;
      case 6:
        return <HeadquarterForm goToNext={handleGoToNext} />;
      case 7:
        return <PackForm goToNext={handleGoToNext} />;
      case 8:
        return <CommandeForm />;
    }
  }
  return (
    <div className="max-w-screen-xl flex  w-full flex-col items-center justify-center gap-5">
      <div className=" w-full lg:max-w-3xl sm:max-w-lg relative">
        <p className=" text-center text-lg font-medium leading-[31px] text-black">
          Création de {companyType}
        </p>
        {activeStep !== 0 && (
          <div className="absolute top-0 left-0 flex max-w-screen-md  w-full">
            <Button
              className="px-0 text-black hover:no-underline"
              variant={'link'}
              onClick={handleGoToPrevious}
            >
              <ChevronLeft size={24} />
              Retour
            </Button>
          </div>
        )}
      </div>

      <ChakraStepper
        index={activeStep}
        colorScheme={'red'}
        flex={1}
        gap={4}
        width={'max-content'}
        showLastSeparator
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex h-10 flex-col  justify-center gap-1 "
          >
            <StepSeparator
              style={{
                maxHeight: '4px',
                minWidth: '30px',
                borderRadius: '3px',
                margin: '0px',
              }}
            />
            <div className="hidden lg:block">
              <Step className="ml-3  flex flex-row items-center justify-center"></Step>
            </div>
          </div>
        ))}
      </ChakraStepper>
      <div className="flex w-full px-3 items-center justify-center ">
        {getStepContent(activeStep)}
      </div>
    </div>
  );
};

export default SaasStepper;
