'use client';
import { FC } from 'react';
import {
  Step,
  StepSeparator,
  Stepper as ChakraStepper,
  useSteps,
  StepIndicator,
  StepStatus,
  StepIcon,
} from '@chakra-ui/react';
import { Button } from '../ui/button';
import { PersonalForm, DurationForm } from '@/components/Forms';
import { ChevronLeft } from 'lucide-react';

import ContactForm from '../Forms/services/common/ContactForm';
import { useRouter, useSearchParams } from 'next/navigation';

import CompanyTypeForm from '../Forms/services/dissolution/CompanyTypeForm';
import DissolutionCompanyDataForm from '../Forms/services/dissolution/DissolutionCompanyDataForm';
import DissolutionLiquidateurForm from '../Forms/services/dissolution/DissolutionLiquidateurForm';
import DissolutionAssocierForm from '../Forms/services/dissolution/DissolutionAssocierForm';
import FinishFlow from '../Forms/services/common/FinishFlow';

interface StepperProps {}
const steps = [
  {
    title: 'Dans quel délai souhaitez-vous créer votre société ?',
    description: '',
    component: DurationForm,
  },
  {
    title: 'Quel est le type de votre société ?',
    description: '',
    component: CompanyTypeForm,
  },
  {
    title: 'Informations sur votre société',
    description: '',
    component: DissolutionCompanyDataForm,
  },
  {
    title: 'Le liquidateur',
    description:
      'Ces informations nous permettront de vous assister au cours de votre processus de création, et seront nécessaires pour constituer votre dossier.',
    component: DissolutionLiquidateurForm,
  },
  {
    title: 'Les associés',
    description:
      'Ces informations nous permettront de vous assister au cours de votre processus de création, et seront nécessaires pour constituer votre dossier.',
    component: DissolutionAssocierForm,
  },
  {
    title: 'Informations personnelles',
    description: '',
    component: PersonalForm,
  },

  {
    title: 'Email & numero de telephone',
    description: '',
    component: ContactForm,
  },
  { title: 'Traitement Dossier', description: '', component: FinishFlow },
];
const DeleteStepper: FC<StepperProps> = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const deleteType = searchParams.get('type');
  const currentStep = searchParams.get('step') ?? 0;
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: Number(currentStep),
    count: steps.length,
  });

  const handleGoToNext = () => {
    router.push(`/delete?type=${deleteType}&step=${activeStep + 1}`);
    goToNext();
  };
  const handleGoToPrevious = () => {
    router.push(`/delete?type=${deleteType}&step=${activeStep - 1}`);
    goToPrevious();
  };

  const StepComponent = steps[activeStep].component;
  return (
    <div className='flex w-full  max-w-screen-xl flex-col items-center justify-center gap-5'>
      <div className=' relative w-full sm:max-w-lg lg:max-w-3xl'>
        <p className=' text-center text-lg font-medium leading-[31px] text-black'>
          {deleteType} de votre société
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
        colorScheme={'orange'}
        flex={1}
        gap={0}
        width={'max-content'}
      >
        {steps.length > activeStep
          ? steps.map((step, index) => (
              <div
                key={index}
                className='flex h-10 items-center  justify-center '
              >
                <div className=' lg:block'>
                  <Step className=' flex flex-row items-center justify-center'>
                    <StepIndicator>
                      <StepStatus complete={<StepIcon />} />
                    </StepIndicator>
                  </Step>
                </div>
                <StepSeparator
                  className='max-h-[4px] min-w-[20px] rounded-[3px] md:min-w-[60px] lg:min-w-[100px]'
                  style={{ margin: 0 }}
                />
              </div>
            ))
          : null}
      </ChakraStepper>
      <div className='flex w-full flex-col items-center justify-center gap-6 px-3 '>
        <div className='flex flex-col justify-center gap-4 font-semibold text-red-500'>
          <p className='text-center text-xl font-medium leading-[31px] text-slate-500'>
            {steps[activeStep].title}
          </p>
          <p className='max-w-lg text-center text-sm font-normal leading-tight text-slate-500'>
            {steps[activeStep].description}
          </p>
        </div>
        <StepComponent goToNext={handleGoToNext} />
      </div>
    </div>
  );
};

export default DeleteStepper;
