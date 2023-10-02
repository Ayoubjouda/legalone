import { FC } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
interface PricingComponentProps extends Package {
  onButtonClick?: () => void;
}

const PricingComponent: FC<PricingComponentProps> = ({
  type,
  price,
  elements,
  onButtonClick,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col border max-w-[340px]  border-slate-200 rounded-lg',
        {
          'border-redish border-4': type === 'express',
        }
      )}
    >
      <div className="w-full  px-[30px] pt-[22px] pb-[30.03px] bg-neutral-50 rounded-tl-lg rounded-tr-lg flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-[79px] flex-col justify-center items-start gap-[11px] flex">
          <div className="self-stretch h-7 flex-col justify-start items-start flex">
            <div className="self-stretch h-7 [244px] flex-col justify-start items-start flex">
              <div className="text-stone-900 text-lg font-semibold font-['IBM Plex Sans'] leading-7">
                {type}
              </div>
            </div>
          </div>
          <div className="self-stretch h-10 flex-col justify-start items-start flex">
            <div className="self-stretch h-10 5 flex-col justify-start items-start flex">
              <div className="text-neutral-700 text-sm font-normal font-['IBM Plex Sans'] leading-tight">
                Déléguez vos démarches de création à nos juristes expérimentés
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  pl-7 [30px] pt-[27px] pb-[30px] bg-white rounded-bl-lg rounded-br-lg flex-col justify-center items-start gap-7 inline-flex">
        <div className="self-stretch  justify-start items-center inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="flex-row justify-start items-end flex">
              <div className="text-stone-900 text-[56px] font-medium font-ibmPlexSans leading-[50px]">
                ${price}
              </div>
              {type === 'expert' ? (
                <div className="text-slate-500 text-sm  font-ibmPlexSans">
                  /year
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="rounded-lg justify-start items-start inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="[9.70px] pb-2.5 rounded-lg justify-center items-start inline-flex">
              <button
                type="button"
                onClick={onButtonClick}
                className={cn(
                  'px-4 py-2 bg-stone-900 cursor-pointer rounded-lg justify-center items-center gap-[9.50px] flex',
                  {
                    'bg-redish': type === 'express',
                  }
                )}
              >
                <p
                  className={cn(
                    'text-center text-white text-sm font-medium font-inter leading-normal'
                  )}
                >
                  Lancez-vous
                </p>
                <ArrowUpRight
                  size={16}
                  color="white"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch h-6 flex-col justify-start items-start flex">
            <div className="text-stone-900 text-base font-medium font-['IBM Plex Sans'] leading-normal">
              Features Included:
            </div>
          </div>
          <div className="self-stretch  flex-col justify-center items-center gap-[18px] flex">
            {elements.map((item, index) => (
              <div
                className="self-stretch h-6 flex-col justify-start items-start flex"
                key={index}
              >
                <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
                  <div className="w-5 h-5 p-0.5 justify-center items-center flex">
                    <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                      <div className="w-4 h-4 relative flex-col justify-start items-start flex">
                        <Image
                          src="/svg-719665980_594.svg"
                          alt=""
                          width={16}
                          height={16}
                          sizes={'100vw'}
                        ></Image>
                      </div>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <div className="self-stretch h-6  flex-col justify-start items-start flex">
                      <div className="text-stone-900 text-base font-normal font-['IBM Plex Sans'] leading-normal">
                        {item.text}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {type === 'expert' ? (
        <div className="flex justify-center mb-4">
          <div className=" gap-4 inline-flex">
            <div className="px-2 py-2 justify-center items-start gap-2.5 rounded-md transition-color duration-300 flex cursor-pointer hover:bg-slate-100">
              <div className="text-black text-base font-medium font-['IBM Plex Sans'] leading-normal">
                Monthly
              </div>
            </div>
            <div className="p-2 rounded-md border border-slate-300 hover:border-redish cursor-pointer transition-color duration-300 justify-start items-center gap-1 flex">
              <div className=" text-orange-600 text-base font-medium font-['IBM Plex Sans'] leading-normal">
                Annually
              </div>
              <div className="p-1 bg-orange-600 bg-opacity-10 rounded-[30px] justify-center items-center flex">
                <div className="text-orange-600 text-[10px] font-medium font-['IBM Plex Sans'] leading-3">
                  save 20%
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PricingComponent;
