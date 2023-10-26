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
import PackForm from '../Forms/PackForm';
import ContactForm from '../Forms/ContactForm';
import { useRouter, useSearchParams } from 'next/navigation';
import RequestedUpdates from '../Forms/RequestedUpdates';
import DeclarationForm from '../Forms/DeclarationForm';
import Companyinfo from '../Forms/Companyinfo';
import FinishFlow from '../Forms/FinishFlow';
import FinishUpdateFlow from '../Forms/FinishUpdateFlow';
interface StepperProps {}
const steps = [
  { title: 'First', description: 'CHOIX DES STATUTS' },
  { title: 'Second', description: 'CRÉATION DE SASU' },
  { title: 'Third', description: 'PROJET' },
  { title: 'Third', description: 'CHOIX DU PLAN' },
  { title: 'Third', description: 'Headquarter' },
];
const UpdateStepper: FC<StepperProps> = () => {
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
    router.push(`/update?type=${companyType}&step=${activeStep + 1}`);
    goToNext();
  };
  const handleGoToPrevious = () => {
    router.push(`/update?type=${companyType}&step=${activeStep - 1}`);
    goToPrevious();
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <DurationForm goToNext={handleGoToNext} />;
      case 1:
        return <RequestedUpdates goToNext={handleGoToNext} />;
      case 2:
        return <DeclarationForm goToNext={handleGoToNext} />;
      case 3:
        return <Companyinfo goToNext={handleGoToNext} />;
      case 4:
        return <ContactForm goToNext={handleGoToNext} />;
      case 5:
        return <FinishUpdateFlow />;
    }
  }
  return (
    <div className='flex w-full  max-w-screen-xl flex-col items-center justify-center gap-5'>
      <div className=' relative w-full sm:max-w-lg lg:max-w-3xl'>
        <p className=' text-center text-lg font-medium leading-[31px] text-black'>
          Modification de votre société
        </p>
        {activeStep !== 0 && (
          <div className='absolute left-0 top-0 flex w-full  max-w-screen-md'>
            <Button
              className='px-0 text-black hover:no-underline'
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
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className='flex h-10 flex-col  justify-center gap-1 '
          >
            <StepSeparator
              style={{
                maxHeight: '4px',
                minWidth: '30px',
                borderRadius: '3px',
                margin: '0px',
              }}
            />
            <div className='hidden lg:block'>
              <Step className='ml-3  flex flex-row items-center justify-center'></Step>
            </div>
          </div>
        ))}
      </ChakraStepper>
      <div className='flex w-full items-center justify-center px-3 '>
        {getStepContent(activeStep)}
      </div>
    </div>
  );
};

export default UpdateStepper;
