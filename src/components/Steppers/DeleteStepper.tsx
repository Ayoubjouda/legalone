'use client';
import { FC } from 'react';
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
import { useFormContext } from 'react-hook-form';
import PackForm from '../Forms/PackForm';
import ContactForm from '../Forms/ContactForm';
import { useRouter, useSearchParams } from 'next/navigation';
import SciDataForm from '../Forms/SciDataForm';
import RequestedUpdates from '../Forms/RequestedUpdates';
import DeclarationForm from '../Forms/DeclarationForm';
import Companyinfo from '../Forms/Companyinfo';
import CompanyTypeForm from '../Forms/CompanyTypeForm';
import DissolutionCompanyDataForm from '../Forms/DissolutionCompanyDataForm';
import DissolutionLiquidateurForm from '../Forms/dissolution/DissolutionLiquidateurForm';
import DissolutionAssocierForm from '../Forms/dissolution/DissolutionAssocierForm';
interface StepperProps {}
const steps = [
  { title: 'First', description: 'CHOIX DES STATUTS' },
  { title: 'Second', description: 'CRÉATION DE SASU' },
  { title: 'Third', description: 'PROJET' },
  { title: 'Third', description: 'CHOIX DU PLAN' },
  { title: 'Third', description: 'Headquarter' },
  { title: 'Third', description: 'Headquarter' },
  { title: 'Third', description: 'Headquarter' },
];
const DeleteStepper: FC<StepperProps> = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const companyType =
    (searchParams.get('type') as CompanyEnum) || ('SAS' as CompanyEnum);
  const currentStep = searchParams.get('step') ?? 0;
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: Number(currentStep),
    count: steps.length,
  });

  const handleGoToNext = () => {
    router.push(`/delete?&step=${activeStep + 1}`);
    goToNext();
  };
  const handleGoToPrevious = () => {
    router.push(`/delete?&step=${activeStep - 1}`);
    goToPrevious();
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <DurationForm goToNext={handleGoToNext} />;
      case 1:
        return <CompanyTypeForm goToNext={handleGoToNext} />;
      case 2:
        return <DissolutionCompanyDataForm goToNext={handleGoToNext} />;
      case 3:
        return <DissolutionLiquidateurForm goToNext={handleGoToNext} />;
      case 4:
        return <ContactForm goToNext={handleGoToNext} />;
      case 5:
        return <DissolutionAssocierForm goToNext={handleGoToNext} />;
      case 6:
        return <PackForm goToNext={handleGoToNext} />;
      case 7:
        return <CommandeForm />;
    }
  }
  return (
    <div className="max-w-screen-xl flex  w-full flex-col items-center justify-center gap-5">
      <div className=" w-full lg:max-w-3xl sm:max-w-lg relative">
        <p className=" text-center text-lg font-medium leading-[31px] text-black">
          Dissolution de votre société
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

export default DeleteStepper;
