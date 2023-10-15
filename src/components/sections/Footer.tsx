import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <section className='w-full'>
      <div className='inline-flex  w-full flex-col items-center justify-center  bg-stone-900 px-[60.50px] pb-[55px] pt-[85px]'>
        <div className='flex w-full flex-col items-start justify-center gap-[83.99px] pb-[0.01px] pt-1'>
          <div className='flex w-full flex-col justify-between gap-y-10 md:flex-row  '>
            <div className=' flex-col items-start justify-center gap-[23px] '>
              <div>
                <span className="font-['Plus Jakarta Sans'] text-xl font-normal text-white">
                  Legal
                </span>
                <span className="font-['Plus Jakarta Sans'] text-xl font-bold text-white">
                  Center
                </span>
              </div>
              <div className=' flex flex-col items-start justify-start'>
                <div className="font-['IBM Plex Sans'] text-[56px] font-medium leading-[59.92px] text-white">
                  Digital solution that <br />
                  just makes sense
                </div>
              </div>
            </div>
            <div>
              <div className="font-['IBM Plex Sans'] text-lg font-normal leading-7 text-white">
                8502 Preston Rd. Inglewood, <br />
                Maine 98380, USA
              </div>
              <div className="font-['IBM Plex Sans'] text-lg font-normal leading-7 text-white">
                framerbite@gmail.com
              </div>
            </div>
          </div>
          <div className='inline-flex h-[74px] flex-col items-center justify-center gap-[46px] self-stretch'>
            <div className=' flex h-1 flex-col items-start justify-start'>
              <div className=' inline-flex h-1 items-center justify-center px-[1.50px]' />
            </div>
            <div className='inline-flex items-center justify-between self-stretch font-inter'>
              <div className='flex h-6 flex-col items-start justify-center gap-6 md:flex-row'>
                <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start self-stretch'>
                  <div className='flex h-6 flex-col items-start justify-start pr-[42.68px]'>
                    <div className='cursor-pointer text-base font-normal leading-normal text-white transition-colors duration-300 hover:text-redish'>
                      About
                    </div>
                  </div>
                </div>
                <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start self-stretch'>
                  <div className='flex h-6 flex-col items-start justify-start pr-[22.68px]'>
                    <div className='cursor-pointer text-base font-normal leading-normal text-white transition-colors duration-300 hover:text-redish'>
                      Features
                    </div>
                  </div>
                </div>
                <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start self-stretch'>
                  <div className='flex h-6 flex-col items-start justify-start pr-[40.68px]'>
                    <div className='cursor-pointer text-base font-normal leading-normal text-white transition-colors duration-300 hover:text-redish'>
                      Works
                    </div>
                  </div>
                </div>
                <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start self-stretch'>
                  <div className='flex h-6 flex-col items-start justify-start pr-[27.68px]'>
                    <div className='cursor-pointer text-base font-normal leading-normal text-white transition-colors duration-300 hover:text-redish'>
                      Support
                    </div>
                  </div>
                </div>
              </div>
              <div className='inline-flex flex-col items-start justify-start'>
                <div className="font-['IBM Plex Sans'] text-base font-normal leading-normal text-white">
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
