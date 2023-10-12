import { FC } from 'react';

interface TestemonialBoxProps {}

const TestemonialBox: FC<TestemonialBoxProps> = () => {
  return (
    <>
      {[1, 2, 3].map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col w-[320px] border-3 rounded-md border-white px-4 py-8 gap-y-4  "
        >
          <div className="text-white text-xl font-normal font-ibmPlexSans leading-[30px]">
            "We love this app! Our users were using it for their projects, so
            clients already knew what this app was and how to use it."
          </div>
          <p className="h-[2px] bg-white"></p>
          <div className="flex justify-between items-center">
            <div className="">
              <div className="text-white text-lg font-semibold font-ibmPlexSans leading-7">
                Bessie Cooper
              </div>
              <div className="text-white text-base font-normal font-ibmPlexSans leading-normal">
                Co-Founder, CEO
              </div>
            </div>
            <img
              className="w-[42px] h-[42px] relative rounded-[500px]"
              src="https://via.placeholder.com/42x42"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TestemonialBox;
