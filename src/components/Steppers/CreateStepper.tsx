import {
  Step,
  useSteps,
  Stepper as ChakraStepper,
  StepSeparator,
  StepIndicator,
  StepStatus,
  StepIcon,
} from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { Button } from '../ui/button';
import { ChevronLeft } from 'lucide-react';
interface StepperProps {
  steps: {
    title: string;
    description: string;
    component: FC<FormProps>;
  }[];
  path: string;
}
interface FormProps {
  goToNext: () => void;
}
export function createStepper({ steps, path }: StepperProps) {
  return function StepperComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const currentStep = searchParams.get('step') ?? 0;
    const { activeStep, goToNext, goToPrevious } = useSteps({
      index: Number(currentStep),
      count: steps.length,
    });

    const handleGoToNext = () => {
      router.push(`/${path}?type=${type}&step=${activeStep + 1}`);
      goToNext();
    };

    const handleGoToPrevious = () => {
      router.push(`/${path}?type=${type}&step=${activeStep - 1}`);
      goToPrevious();
    };

    const StepComponent = steps[activeStep].component;

    return (
      <div className='flex w-full   max-w-screen-xl flex-col items-center justify-center gap-5'>
        <div className=' w-full sm:max-w-lg lg:max-w-3xl'>
          <p className=' text-center text-lg font-medium leading-[31px] text-black'>
            Création de {type}
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
}
