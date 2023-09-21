import { ArrowUpRight } from 'lucide-react';
import { FC } from 'react';

interface LancerVousProps {}

const LancerVous: FC<LancerVousProps> = () => {
  return (
    <section className="w-full max-w-screen-xl">
      <div className="w-full  justify-center items-center ">
        <div className="w-full grow shrink basis-0  flex-col justify-start items-center ">
          <div className="w-full self-stretch  flex-col justify-start items-start flex">
            <div className="w-full self-stretch  bg-stone-900 rounded-2xl justify-center items-center ">
              <div className="w-full grow shrink basis-0  flex-col justify-start items-center ">
                <div className=" w-full justify-center items-center ">
                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start ">
                    <div className=" justify-center items-center ">
                      <div className=" relative flex-col justify-start items-start flex" />
                    </div>
                  </div>
                </div>
                <div className="  flex-col justify-center items-center flex">
                  <div className="self-stretch flex-col justify-start items-start ">
                    <div className=" flex-col justify-center items-center flex">
                      <div className=" relative flex-col justify-start items-start flex" />
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col sm:flex-row  flex gap-4 justify-between items-center px-16  py-16 ">
                  <div className="flex flex-col justify-start items-start gap-4 ">
                    <div className="self-stretch pr-[47px] flex-col justify-start items-start flex">
                      <div className="text-white text-[56px] font-medium font-['IBM Plex Sans'] leading-[59.92px]">
                        Lancer votre Entreprise
                      </div>
                    </div>
                    <div className="self-stretch  flex-col justify-center items-start flex">
                      <div className="self-stretch  pr-[46px] flex-col justify-start items-start flex">
                        <div className="text-zinc-300 lg:max-w-[635px] text-base font-normal font-['IBM Plex Sans'] leading-normal">
                          Rejoignez des milliers d'entrepreneurs qui ont
                          Rejoignez des milliers d'entrepreneurs qui ont.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-start flex">
                    <button className="px-4 py-3 w-max bg-orange-600 rounded-lg justify-center items-center gap-[9.48px] flex text-center text-white text-sm font-medium font-inter leading-normal">
                      Lancez-vous
                      <ArrowUpRight
                        size={16}
                        color="white"
                      />
                    </button>
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

export default LancerVous;
