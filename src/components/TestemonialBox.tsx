import { FC } from 'react';
import Image from 'next/image';
interface TestemonialBoxProps {}

const TestemonialBox: FC<TestemonialBoxProps> = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
        <div
          key={idx}
          className='flex w-[320px] flex-col gap-y-4 rounded-lg border border-gray-200 px-4 py-8  '
        >
          <div className='font-ibmPlexSans text-xl font-normal leading-[30px] text-black'>
            "We love this app! Our users were using it for their projects, so
            clients already knew what this app was and how to use it."
          </div>
          <p className='h-[2px] bg-white'></p>
          <div className='flex items-center gap-3'>
            <Image
              alt='image'
              className='relative h-[42px] w-[42px] rounded-[500px]'
              src='https://via.placeholder.com/42x42'
              height={0}
              width={0}
              sizes='100vw'
            />
            <div className=''>
              <div className='font-ibmPlexSans text-lg font-semibold leading-7 '>
                Bessie Cooper
              </div>
              <div className='font-ibmPlexSans text-base font-normal leading-normal '>
                Co-Founder, CEO
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestemonialBox;
