import { FC } from 'react';
import TestemonialBox from '../TestemonialBox';

interface TestemonialSectionProps {}

const TestemonialSection: FC<TestemonialSectionProps> = () => {
  return (
    <div className='w-full space-y-16 bg-black py-32 '>
      <div className='space-y-6 px-4'>
        <p className='text-center font-ibmPlexSans text-base font-medium leading-7 text-orange-600 md:text-lg'>
          3940+ Happy Users
        </p>
        <p className='text-center font-ibmPlexSans text-3xl font-medium text-white md:text-[50px] md:leading-[59.92px]'>
          Don’t just take our words
        </p>
      </div>
      <div className='flex w-full flex-wrap justify-center  gap-x-4 gap-y-6 px-4'>
        {/* //UserBox */}
        <TestemonialBox />
      </div>
    </div>
  );
};

export default TestemonialSection;
