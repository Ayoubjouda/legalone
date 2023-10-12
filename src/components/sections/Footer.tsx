import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <section className="w-full">
      <div className="w-full  px-[60.50px] pt-[85px] pb-[55px] bg-stone-900  flex-col justify-center items-center inline-flex">
        <div className="w-full pt-1 pb-[0.01px] flex-col justify-center items-start gap-[83.99px] flex">
          <div className="w-full flex flex-col gap-y-10 md:flex-row justify-between  ">
            <div className=" flex-col justify-center items-start gap-[23px] ">
              <div>
                <span className="text-white text-xl font-normal font-['Plus Jakarta Sans']">
                  Legal
                </span>
                <span className="text-white text-xl font-bold font-['Plus Jakarta Sans']">
                  Center
                </span>
              </div>
              <div className=" flex-col justify-start items-start flex">
                <div className="text-white text-[56px] font-medium font-['IBM Plex Sans'] leading-[59.92px]">
                  Digital solution that <br />
                  just makes sense
                </div>
              </div>
            </div>
            <div>
              <div className="text-white text-lg font-normal font-['IBM Plex Sans'] leading-7">
                8502 Preston Rd. Inglewood, <br />
                Maine 98380, USA
              </div>
              <div className="text-white text-lg font-normal font-['IBM Plex Sans'] leading-7">
                framerbite@gmail.com
              </div>
            </div>
          </div>
          <div className="self-stretch h-[74px] flex-col justify-center items-center gap-[46px] inline-flex">
            <div className=" h-1 flex-col justify-start items-start flex">
              <div className=" h-1 px-[1.50px] justify-center items-center inline-flex" />
            </div>
            <div className="self-stretch justify-between font-inter items-center inline-flex">
              <div className="h-6 justify-center items-start gap-6 flex md:flex-row flex-col">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                  <div className="h-6 pr-[42.68px] flex-col justify-start items-start flex">
                    <div className="text-white text-base font-normal cursor-pointer hover:text-redish transition-colors duration-300 leading-normal">
                      About
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                  <div className="h-6 pr-[22.68px] flex-col justify-start items-start flex">
                    <div className="text-white text-base font-normal cursor-pointer hover:text-redish transition-colors duration-300 leading-normal">
                      Features
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                  <div className="h-6 pr-[40.68px] flex-col justify-start items-start flex">
                    <div className="text-white text-base font-normal cursor-pointer hover:text-redish transition-colors duration-300 leading-normal">
                      Works
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                  <div className="h-6 pr-[27.68px] flex-col justify-start items-start flex">
                    <div className="text-white text-base font-normal cursor-pointer hover:text-redish transition-colors duration-300 leading-normal">
                      Support
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-white text-base font-normal font-['IBM Plex Sans'] leading-normal">
                  © 2023 FramerBite, All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
