import { FC } from 'react';

interface InovateSectionProps {}

const InovateSection: FC<InovateSectionProps> = () => {
  return (
    <section className=" px-8 py-8 justify-center items-center inline-flex font-ibmPlexSans">
      <div className="grow shrink basis-0 flex-col justify-start items-center gap-20 inline-flex">
        <div className="flex-col justify-start items-center gap-[27px] flex">
          <div className="self-stretch h-7  flex-col justify-start items-center flex">
            <div className="text-center text-orange-600 text-base md:text-lg font-medium  leading-7">
              Why LegalCenter
            </div>
          </div>
          <div className=" pr-3 flex-col justify-start items-center flex">
            <div className="text-center text-stone-900  text-3xl md:text-[50px] max-w-[350px] md:max-w-[650px] font-medium  md:leading-[59.92px]">
              All you need to run your brands effectively
            </div>
          </div>
        </div>
        <div className="self-stretch justify-between lg:items-start inline-flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-col justify-start items-start inline-flex">
            <div className=" flex-col justify-start items-center gap-8 flex">
              <img
                className="w-[60px] h-[61px] relative"
                src="https://via.placeholder.com/60x61"
              />
              <div className="self-stretch  flex-col justify-center items-center gap-4 flex">
                <div className=" flex-col justify-start items-center flex">
                  <div className="text-center text-stone-900 text-xl font-semibold font-['IBM Plex Sans'] leading-[30px]">
                    Innovative Solutions
                  </div>
                </div>
                <div className=" flex-col justify-start items-center flex max-w-xs">
                  <div className="text-center text-stone-900 text-base font-normal font-['IBM Plex Sans'] leading-normal">
                    Fluxy gives you the blocks & components you need to create a
                    truly professional website, landing page or admin panel.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className=" flex-col justify-start items-center gap-8 flex">
              <img
                className="w-[60px] h-[61px] relative"
                src="https://via.placeholder.com/60x61"
              />
              <div className="self-stretch  flex-col justify-center items-center gap-4 flex">
                <div className=" flex-col justify-start items-center flex">
                  <div className="text-center text-stone-900 text-xl font-semibold font-['IBM Plex Sans'] leading-[30px]">
                    Innovative Solutions
                  </div>
                </div>
                <div className=" flex-col justify-start items-center flex max-w-xs">
                  <div className="text-center text-stone-900 text-base font-normal font-['IBM Plex Sans'] leading-normal">
                    Fluxy gives you the blocks & components you need to create a
                    truly professional website, landing page or admin panel.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className=" flex-col justify-start items-center gap-8 flex">
              <img
                className="w-[60px] h-[61px] relative"
                src="https://via.placeholder.com/60x61"
              />
              <div className="self-stretch  flex-col justify-center items-center gap-4 flex">
                <div className=" flex-col justify-start items-center flex">
                  <div className="text-center text-stone-900 text-xl font-semibold font-['IBM Plex Sans'] leading-[30px]">
                    Innovative Solutions
                  </div>
                </div>
                <div className=" flex-col justify-start items-center flex max-w-xs">
                  <div className="text-center text-stone-900 text-base font-normal font-['IBM Plex Sans'] leading-normal">
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
