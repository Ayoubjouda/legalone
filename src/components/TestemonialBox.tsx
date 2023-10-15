import { FC } from 'react';

interface TestemonialBoxProps {}

const TestemonialBox: FC<TestemonialBoxProps> = () => {
  return (
    <>
      {[1, 2, 3].map((item, idx) => (
        <div
          key={idx}
          className='flex w-[320px] flex-col gap-y-4 rounded-md border-3 border-white px-4 py-8  '
        >
          <div className='font-ibmPlexSans text-xl font-normal leading-[30px] text-white'>
            "We love this app! Our users were using it for their projects, so
            clients already knew what this app was and how to use it."
          </div>
          <p className='h-[2px] bg-white'></p>
          <div className='flex items-center justify-between'>
            <div className=''>
              <div className='font-ibmPlexSans text-lg font-semibold leading-7 text-white'>
                Bessie Cooper
              </div>
              <div className='font-ibmPlexSans text-base font-normal leading-normal text-white'>
                Co-Founder, CEO
              </div>
            </div>
            <img
              className='relative h-[42px] w-[42px] rounded-[500px]'
              src='https://via.placeholder.com/42x42'
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TestemonialBox;
