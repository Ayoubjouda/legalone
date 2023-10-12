import { FC } from 'react';
import TestemonialBox from '../TestemonialBox';

interface TestemonialSectionProps {}

const TestemonialSection: FC<TestemonialSectionProps> = () => {
  return (
    <div className="bg-black w-full py-32 space-y-16 ">
      <div className="space-y-6">
        <p className="text-center text-orange-600 text-base md:text-lg font-medium font-ibmPlexSans leading-7">
          3940+ Happy Users
        </p>
        <p className="text-center text-white text-3xl md:text-[50px] font-medium font-ibmPlexSans md:leading-[59.92px]">
          Don’t just take our words
        </p>
      </div>
      <div className="flex w-full justify-center gap-x-5  px-4 flex-wrap gap-y-6">
        {/* //UserBox */}
        <TestemonialBox />
      </div>
    </div>
  );
};

export default TestemonialSection;
