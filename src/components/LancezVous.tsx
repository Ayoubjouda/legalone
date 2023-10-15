import { ArrowUpRight } from 'lucide-react';
import { FC } from 'react';

interface LancerVousProps {}

const LancerVous: FC<LancerVousProps> = () => {
  return (
    <section className='w-full max-w-screen-xl'>
      <div className='w-full  items-center justify-center '>
        <div className='w-full shrink grow basis-0  flex-col items-center justify-start '>
          <div className='flex w-full  flex-col items-start justify-start self-stretch'>
            <div className='w-full items-center  justify-center self-stretch rounded-2xl bg-stone-900 '>
              <div className='w-full shrink grow basis-0  flex-col items-center justify-start '>
                <div className=' w-full items-center justify-center '>
                  <div className='shrink grow basis-0 flex-col items-start justify-start self-stretch '>
                    <div className=' items-center justify-center '>
                      <div className=' relative flex flex-col items-start justify-start' />
                    </div>
                  </div>
                </div>
                <div className='  flex flex-col items-center justify-center'>
                  <div className='flex-col items-start justify-start self-stretch '>
                    <div className=' flex flex-col items-center justify-center'>
                      <div className=' relative flex flex-col items-start justify-start' />
                    </div>
                  </div>
                </div>
                <div className='flex w-full flex-col  items-center justify-between gap-4 px-16 py-16  sm:flex-row '>
                  <div className='flex flex-col items-start justify-start gap-4 '>
                    <div className='flex flex-col items-start justify-start self-stretch pr-[47px]'>
                      <div className="font-['IBM Plex Sans'] text-[56px] font-medium leading-[59.92px] text-white">
                        Lancer votre Entreprise
                      </div>
                    </div>
                    <div className='flex  flex-col items-start justify-center self-stretch'>
                      <div className='flex  flex-col items-start justify-start self-stretch pr-[46px]'>
                        <div className="font-['IBM Plex Sans'] text-base font-normal leading-normal text-zinc-300 lg:max-w-[635px]">
                          Rejoignez des milliers d'entrepreneurs qui ont
                          Rejoignez des milliers d'entrepreneurs qui ont.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-start justify-start'>
                    <button className='flex w-max items-center justify-center gap-[9.48px] rounded-lg bg-orange-600 px-4 py-3 text-center font-inter text-sm font-medium leading-normal text-white'>
                      Lancez-vous
                      <ArrowUpRight
                        size={16}
                        color='white'
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
