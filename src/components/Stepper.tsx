'use client';
import { FC, useEffect } from 'react';
import {
  Step,
  StepSeparator,
  Stepper as ChakraStepper,
  useSteps,
} from '@chakra-ui/react';
import { Button } from './ui/button';
import { FormSix } from '@/components/Forms/Forms';
import {
  PersonalForm,
  DurationForm,
  ActivityForm,
  ManagerForm,
  CompanyDataForm,
  HeadquarterForm,
} from '@/components/Forms';
import { ChevronLeft } from 'lucide-react';
import useFormPersist from 'react-hook-form-persist';
import { useFormContext } from 'react-hook-form';
import useAppStore from '@/zustand/store';
import PackForm from './Forms/PackForm';
interface StepperProps {}
const steps = [
  { title: 'First', description: 'CHOIX DES STATUTS' },
  { title: 'Second', description: 'CRÉATION DE SASU' },
  { title: 'Third', description: 'PROJET' },
  { title: 'Third', description: 'CHOIX DU PLAN' },
  { title: 'Third', description: 'Headquarter' },
  { title: 'Third', description: 'Récapitulatif' },
  { title: 'Third', description: 'Récapitulatif' },
];
const Stepper: FC<StepperProps> = () => {
  const { activeStep, goToNext, goToPrevious, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const { watch, setValue } = useFormContext();
  const { setActiveStep: setStoredStep, activeStep: storedStep } =
    useAppStore();

  useEffect(() => {
    setStoredStep(activeStep);
  }, [activeStep]);
  useEffect(() => {
    if (storedStep !== 0) {
      setActiveStep(storedStep);
    }
  }, []);

  useFormPersist('storageKey', {
    watch,
    setValue,
    storage: window.localStorage, // default window.sessionStorage
  });

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <DurationForm
            goToNext={goToNext}
            goToPrevious={goToPrevious}
          />
        );
      case 1:
        return (
          <ActivityForm
            goToNext={goToNext}
            goToPrevious={goToPrevious}
          />
        );
      case 2:
        return (
          <ManagerForm
            goToNext={goToNext}
            goToPrevious={goToPrevious}
          />
        );
      case 3:
        return (
          <PersonalForm
            goToNext={goToNext}
            goToPrevious={goToPrevious}
          />
        );
      case 4:
        return (
          <CompanyDataForm
            goToNext={goToNext}
            goToPrevious={goToPrevious}
          />
        );
      case 5:
        return (
          <HeadquarterForm
            goToNext={goToNext}
            goToPrevious={goToPrevious}
          />
        );
      case 6:
        return (
          <PackForm
            goToNext={goToNext}
            goToPrevious={goToPrevious}
          />
        );
      default:
        return (
          <FormSix
            goToNext={goToNext}
            goToPrevious={goToPrevious}
          />
        );
    }
  }
  return (
    <div className="max-w-screen-xl flex  w-full flex-col items-center justify-center gap-5">
      {activeStep !== 0 && (
        <div className=" flex max-w-screen-md  w-full">
          <Button
            className="px-0 text-black hover:no-underline"
            variant={'link'}
            onClick={goToPrevious}
          >
            <ChevronLeft size={24} />
            Retour
          </Button>
        </div>
      )}
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

export default Stepper;
