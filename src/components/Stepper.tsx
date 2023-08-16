import { FC } from 'react';
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper as ChakraStepper,
  useSteps,
  Text,
} from '@chakra-ui/react';
import { Button } from './ui/button';
import { FormOne, FormTwo, FormThree, FormFour } from '@/components/Forms';

interface StepperProps {}
const steps = [
  { title: 'First', description: 'CHOIX DES STATUTS' },
  { title: 'Second', description: 'CRÉATION DE SASU' },
  { title: 'Third', description: 'PROJET' },
  { title: 'Third', description: 'CHOIX DU PLAN' },
  { title: 'Third', description: 'Récapitulatif' },
];
const Stepper: FC<StepperProps> = () => {
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  });
  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <FormOne />;
      case 1:
        return <FormTwo />;
      case 2:
        return <FormThree />;
      default:
        return <FormFour />;
    }
  }
  return (
    <div className="flex  flex-col gap-10">
      <ChakraStepper
        index={activeStep}
        colorScheme={'orange'}
        flex={1}
        gap={10}
        width={'max-content'}
        showLastSeparator
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex h-10 flex-col  justify-center gap-1 "
          >
            <StepSeparator
              style={{ width: '120%', maxHeight: '3px', borderRadius: '2px' }}
            />

            <Step className="ml-3 flex flex-row items-center justify-center">
              <StepIndicator boxSize={'4'}>
                <StepStatus complete={<StepIcon boxSize={3} />} />
              </StepIndicator>

              <Text>
                <span className="text-sm font-medium uppercase leading-none text-gray-700">
                  {step?.description}
                </span>
              </Text>
            </Step>
          </div>
        ))}
      </ChakraStepper>
      <div className="flex items-center justify-center">
        {getStepContent(activeStep)}
      </div>
      <div className="flex justify-end gap-4 ">
        {activeStep !== 0 && (
          <Button
            className="font-semibold"
            onClick={goToPrevious}
          >
            previous
          </Button>
        )}
        <Button
          className="font-semibold"
          onClick={goToNext}
        >
          next
        </Button>
      </div>
    </div>
  );
};

export default Stepper;
