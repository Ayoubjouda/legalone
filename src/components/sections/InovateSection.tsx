import { FC } from 'react';
import Image from 'next/image';
interface InovateSectionProps {}

const InovateSection: FC<InovateSectionProps> = () => {
  return (
    <section className=' inline-flex items-center justify-center px-8 py-8 font-ibmPlexSans'>
      <div className='inline-flex shrink grow basis-0 flex-col items-center justify-start gap-20'>
        <div className='flex flex-col items-center justify-start gap-[27px]'>
          <div className='flex h-7  flex-col items-center justify-start self-stretch'>
            <div className='text-center text-base font-medium leading-7 text-orange-600  md:text-lg'>
              Why LegalCenter
            </div>
          </div>
          <div className=' flex flex-col items-center justify-start pr-3'>
            <div className='max-w-[350px] text-center  text-3xl font-medium text-stone-900 md:max-w-[650px] md:text-[50px]  md:leading-[59.92px]'>
              All you need to run your brands effectively
            </div>
          </div>
        </div>
        <div className='inline-flex flex-col items-center justify-between gap-10 self-stretch lg:flex-row lg:items-start'>
          <div className='inline-flex flex-col items-start justify-start'>
            <div className=' flex flex-col items-center justify-start gap-8'>
              <Image
                alt='image'
                className='relative h-[61px] w-[60px]'
                src='https://via.placeholder.com/60x61'
                width={0}
                height={0}
                sizes='100vw'
              />
              <div className='flex  flex-col items-center justify-center gap-4 self-stretch'>
                <div className=' flex flex-col items-center justify-start'>
                  <div className="font-['IBM Plex Sans'] text-center text-xl font-semibold leading-[30px] text-stone-900">
                    Innovative Solutions
                  </div>
                </div>
                <div className=' flex max-w-xs flex-col items-center justify-start'>
                  <div className="font-['IBM Plex Sans'] text-center text-base font-normal leading-normal text-stone-900">
                    Fluxy gives you the blocks & components you need to create a
                    truly professional website, landing page or admin panel.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start'>
            <div className=' flex flex-col items-center justify-start gap-8'>
              <Image
                alt='image'
                className='relative h-[61px] w-[60px]'
                src='https://via.placeholder.com/60x61'
                width={0}
                height={0}
                sizes='100vw'
              />
              <div className='flex  flex-col items-center justify-center gap-4 self-stretch'>
                <div className=' flex flex-col items-center justify-start'>
                  <div className="font-['IBM Plex Sans'] text-center text-xl font-semibold leading-[30px] text-stone-900">
                    Innovative Solutions
                  </div>
                </div>
                <div className=' flex max-w-xs flex-col items-center justify-start'>
                  <div className="font-['IBM Plex Sans'] text-center text-base font-normal leading-normal text-stone-900">
                    Fluxy gives you the blocks & components you need to create a
                    truly professional website, landing page or admin panel.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start'>
            <div className=' flex flex-col items-center justify-start gap-8'>
              <Image
                alt='image'
                className='relative h-[61px] w-[60px]'
                src='https://via.placeholder.com/60x61'
                width={0}
                height={0}
                sizes='100vw'
              />
              <div className='flex  flex-col items-center justify-center gap-4 self-stretch'>
                <div className=' flex flex-col items-center justify-start'>
                  <div className="font-['IBM Plex Sans'] text-center text-xl font-semibold leading-[30px] text-stone-900">
                    Innovative Solutions
                  </div>
                </div>
                <div className=' flex max-w-xs flex-col items-center justify-start'>
                  <div className="font-['IBM Plex Sans'] text-center text-base font-normal leading-normal text-stone-900">
                    Fluxy gives you the blocks & components you need to create a
                    truly professional website, landing page or admin panel.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InovateSection;
