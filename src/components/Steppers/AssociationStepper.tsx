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
import {
  PersonalForm,
  DurationForm,
  ActivityForm,
  HeadquarterForm,
} from '@/components/Forms';
import { ChevronLeft } from 'lucide-react';
import ContactForm from '../Forms/services/common/ContactForm';
import { useRouter, useSearchParams } from 'next/navigation';
import TresorierForm from '../Forms/services/creation/assosiation/TresorierForm';
import AssociationDataForm from '../Forms/services/creation/assosiation/AssociationDataForm';
import FinishFlow from '../Forms/services/common/FinishFlow';

interface StepperProps {}

const steps = [
  { title: 'First', description: 'CHOIX DES STATUTS', component: DurationForm },
  { title: 'Second', description: 'CRÉATION DE SASU', component: ActivityForm },
  { title: 'Third', description: 'PROJET', component: AssociationDataForm },
  { title: 'Fourth', description: 'CHOIX DU PLAN', component: PersonalForm },
  { title: 'Fifth', description: 'Headquarter', component: TresorierForm },
  {
    title: 'Sixth',
    description: 'Récapitulatif 1',
    component: HeadquarterForm,
  },
  { title: 'Seventh', description: 'Récapitulatif 2', component: ContactForm },
  { title: 'Eighth', description: 'Finish', component: FinishFlow },
];

const AssociationStepper: FC<StepperProps> = () => {
  const searchParams = useSearchParams();
  const companyType =
    (searchParams.get('type') as CompanyEnum) || ('SAS' as CompanyEnum);
  const currentStep = searchParams.get('step') ?? 0;
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: Number(currentStep),
    count: steps.length,
  });

  const router = useRouter();

  const handleGoToNext = () => {
    router.push(`/create?type=${companyType}&step=${activeStep + 1}`);
    goToNext();
  };
  const handleGoToPrevious = () => {
    router.push(`/create?type=${companyType}&step=${activeStep - 1}`);
    goToPrevious();
  };

  const StepComponent = steps[activeStep].component;

  return (
    <div className='flex w-full  max-w-screen-xl flex-col items-center justify-center gap-5'>
      <div className=' relative w-full sm:max-w-lg lg:max-w-3xl'>
        <p className=' text-center text-lg font-medium leading-[31px] text-black'>
          Création d'association
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
      <div className='flex w-full items-center justify-center px-3 '>
        <StepComponent goToNext={handleGoToNext} />
      </div>
    </div>
  );
};

export default AssociationStepper;
