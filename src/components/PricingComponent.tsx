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
  extra,
  onButtonClick,
}) => {
  return (
    <div
      className={cn(
        'flex max-w-[340px] flex-col rounded-lg  border border-slate-200',
        {
          'border-4 border-redish': type === '24HChrono',
        }
      )}
    >
      <div className='inline-flex  w-full flex-col items-start justify-start rounded-tl-lg rounded-tr-lg bg-neutral-50 px-[30px] pb-[30.03px] pt-[22px]'>
        <div className='flex h-[79px] flex-col items-start justify-center gap-[11px] self-stretch'>
          <div className='flex h-7 flex-col items-start justify-start self-stretch'>
            <div className='[244px] flex h-7 flex-col items-start justify-start self-stretch'>
              <div className="font-['IBM Plex Sans'] text-lg font-semibold leading-7 text-stone-900">
                {type}
              </div>
            </div>
          </div>
          <div className='flex h-10 flex-col items-start justify-start self-stretch'>
            <div className='5 flex h-10 flex-col items-start justify-start self-stretch'>
              <div className="font-['IBM Plex Sans'] text-sm font-normal leading-tight text-neutral-700">
                Déléguez vos démarches de création à nos experts juridiques
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='[30px]  inline-flex w-full flex-col items-start justify-center gap-7 rounded-bl-lg rounded-br-lg bg-white pb-[30px] pl-7 pt-[27px]'>
        <div className='inline-flex  items-center justify-start self-stretch'>
          <div className='inline-flex flex-col items-start justify-start'>
            <div className='flex flex-row items-end justify-start'>
              <div className='font-ibmPlexSans text-[56px] font-medium leading-[50px] text-stone-900'>
                ${price}
              </div>
              {type === 'expert' ? (
                <div className='font-ibmPlexSans text-sm  text-slate-500'>
                  /year
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className='inline-flex items-start justify-start rounded-lg'>
          <div className='inline-flex flex-col items-start justify-start'>
            <div className='[9.70px] inline-flex items-start justify-center rounded-lg pb-2.5'>
              <button
                type='button'
                onClick={onButtonClick}
                className={cn(
                  'flex cursor-pointer items-center justify-center gap-[9.50px] rounded-lg bg-stone-900 px-4 py-2',
                  {
                    'bg-redish': type === 'express',
                  }
                )}
              >
                <p
                  className={cn(
                    'text-center font-inter text-sm font-medium leading-normal text-white'
                  )}
                >
                  Lancez-vous
                </p>
                <ArrowUpRight
                  size={16}
                  color='white'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='flex  flex-col items-start justify-start gap-6 self-stretch'>
          <div className='flex h-6 flex-col items-start justify-start self-stretch'>
            <div className="font-['IBM Plex Sans'] text-base font-medium leading-normal text-stone-900">
              Caractéristiques incluses :
            </div>
          </div>
          <div className='flex  flex-col items-center justify-center gap-[18px] self-stretch'>
            {elements.map((item, index) => (
              <div
                className='flex  flex-col items-start justify-start  gap-2 self-stretch'
                key={index}
              >
                <div className='flex items-start justify-start gap-2 self-stretch'>
                  <div className='flex h-5 w-5 items-center justify-center '>
                    <div className='inline-flex items-center justify-center self-stretch'>
                      <div className='relative flex h-4 w-4 flex-col items-start justify-start'>
                        <Image
                          src='/valid.svg'
                          alt=''
                          width={16}
                          height={16}
                          sizes={'100vw'}
                        ></Image>
                      </div>
                    </div>
                  </div>
                  <div className='0 inline-flex flex-col items-start justify-start'>
                    <div className='flex flex-col items-start justify-start self-stretch'>
                      <div className='font-ibmPlexSans text-base font-normal leading-5 text-stone-900'>
                        {item.text}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {extra
              ? extra.map((item, index) => (
                  <div
                    className='flex  flex-col items-start justify-start  gap-2 self-stretch'
                    key={index}
                  >
                    <div className='flex items-start justify-start gap-2 self-stretch'>
                      <div className='flex h-5 w-5 items-center justify-center '>
                        <div className='inline-flex items-center justify-center self-stretch'>
                          <div className='relative flex h-4 w-4 flex-col items-start justify-start'>
                            <Image
                              src='/valid.svg'
                              alt=''
                              width={16}
                              height={16}
                              sizes={'100vw'}
                            ></Image>
                          </div>
                        </div>
                      </div>
                      <div className='0 inline-flex flex-col items-start justify-start'>
                        <div className='flex flex-col items-start justify-start self-stretch'>
                          <div className='font-ibmPlexSans text-base font-normal leading-5 text-stone-900'>
                            {item.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      {type === 'expert' ? (
        <div className='mb-4 flex justify-center'>
          <div className=' inline-flex gap-4'>
            <div className='transition-color flex cursor-pointer items-start justify-center gap-2.5 rounded-md px-2 py-2 duration-300 hover:bg-slate-100'>
              <div className="font-['IBM Plex Sans'] text-base font-medium leading-normal text-black">
                Monthly
              </div>
            </div>
            <div className='transition-color flex cursor-pointer items-center justify-start gap-1 rounded-md border border-slate-300 p-2 duration-300 hover:border-redish'>
              <div className=" font-['IBM Plex Sans'] text-base font-medium leading-normal text-orange-600">
                Annually
              </div>
              <div className='flex items-center justify-center rounded-[30px] bg-orange-600 bg-opacity-10 p-1'>
                <div className="font-['IBM Plex Sans'] text-[10px] font-medium leading-3 text-orange-600">
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
