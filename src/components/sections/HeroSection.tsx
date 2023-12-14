import { ArrowRight } from 'lucide-react';
import { FC } from 'react';
import ServiceCard from '../ServiceCard';
import Image from 'next/image';
import {
  CREATE_COMPANY_DATA,
  DELETE_COMPANY_DATA,
  UPDATE_COMPANY_DATA,
} from '@/lib/constants';
interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className=' z-[7] mx-4 mt-8 flex flex-col items-center  justify-start  gap-[45px] self-stretch text-center text-base md:gap-12'>
      <div className='flex flex-col items-center gap-6'>
        {/* <div className='inline-flex h-[39.40px] items-center justify-start gap-[11.69px] rounded-[50px] border border-black border-opacity-5 bg-white bg-opacity-40 py-1.5 pl-2 pr-3'>
          <div className='flex items-center justify-center rounded-2xl bg-orange-500 bg-opacity-10 pb-[4.90px] pl-[11.75px] pr-[11.55px] pt-[3.50px]'>
            <div className='text-center font-ibmPlexSans text-xs font-medium leading-[18.90px] text-redish md:text-sm'>
              Nouveau
            </div>
          </div>
          <div className='flex items-center justify-start gap-[3.34px]'>
            <div className='inline-flex flex-col items-center justify-start pb-[0.90px]'>
              <div className='text-center font-ibmPlexSans text-xs font-medium leading-[18.90px] text-redish sm:text-sm'>
                Votre entreprise en quelques secondes
              </div>
            </div>
            <div className='inline-flex h-4 w-4 flex-col items-start justify-start'>
              <ArrowRight color='#D86949' />
            </div>
          </div>
        </div> */}
        <div className=' relative inline-block max-w-[300px] font-ibmPlexSans  text-[45px] font-medium leading-[45px] tracking-[-0.02em] sm:max-w-[420px] md:max-w-[869px] lg:text-45xl lg:leading-[60px] '>
          <p className='m-0'>
            Envie de créer votre{' '}
            <span className='text-redish after:absolute after:top-7 after:content-excited sm:after:right-32 sm:after:top-6  sm:after:h-1 sm:after:w-1   md:after:-top-5 md:after:right-16 md:after:w-2 lg:after:-top-10 lg:after:right-4 lg:after:w-8 '>
              société?
            </span>
          </p>
          <p className='m-0'>Nous sommes là pour vous assister</p>
        </div>
        <div className='relative  max-w-[590px] px-8 text-lg leading-6 text-gray-700'>
          <p className='m-0'>
            Dès à présent, créer votre société en un rien de temps en vous
            laissant guider par notre expertise.
          </p>
        </div>
      </div>

      <div className='flex max-w-[980px] flex-col  items-center justify-center gap-12 '>
        <div className='flex flex-col items-end justify-center gap-4 md:flex-row lg:gap-12'>
          <ServiceCard
            title="Création d'entreprise"
            icon='building'
            links={CREATE_COMPANY_DATA}
            description='SAS, SARL, Auto-entreprise'
          />
          <ServiceCard
            title='Modification de status'
            icon='cog'
            links={UPDATE_COMPANY_DATA}
            description='Transfert de siège, changement ...'
          />
          <ServiceCard
            title="Fermeture d'entreprise"
            icon='folderX'
            links={DELETE_COMPANY_DATA}
            description='Dissolution, liquidation et radiation'
          />
        </div>
        {/* <div className='inline-flex h-9 max-w-[290px] items-center justify-center gap-4'>
          <div className='flex items-center justify-start'>
            <div className='inline-flex w-[25px] flex-col items-start justify-start'>
              <div className='flex h-[35.71px] flex-col items-start justify-start rounded-[99px]'>
                <Image
                  className='relative h-[35.71px] w-[35.71px] rounded-[99px]'
                  src='https://i.pravatar.cc/300'
                  alt='avatar'
                  width={0}
                  height={0}
                  sizes='100vw'
                />
                <div className='h-[35.71px] w-[35.71px] rounded-[99px] border-2 border-white' />
              </div>
            </div>
            <div className='inline-flex w-[25px] flex-col items-start justify-start'>
              <div className='flex h-9 flex-col items-start justify-start rounded-[99px]'>
                <Image
                  className='relative h-9 w-9 rounded-[99px]'
                  src='https://i.pravatar.cc/250'
                  alt='avatar'
                  width={0}
                  height={0}
                  sizes='100vw'
                />
                <div className='h-9 w-9 rounded-[99px] border-2 border-white' />
              </div>
            </div>
            <div className='inline-flex w-[25px] flex-col items-start justify-start'>
              <div className='flex h-9 flex-col items-start justify-start rounded-[99px]'>
                <Image
                  className='relative h-9 w-9 rounded-[99px]'
                  src='https://i.pravatar.cc/400'
                  alt='avatar'
                  width={0}
                  height={0}
                  sizes='100vw'
                />
                <div className='h-9 w-9 rounded-[99px] border-2 border-white' />
              </div>
            </div>
            <div className='inline-flex w-[25px] flex-col items-start justify-start'>
              <div className='flex h-9 flex-col items-start justify-start rounded-[99px]'>
                <Image
                  className='relative h-9 w-9 rounded-[99px]'
                  src='https://i.pravatar.cc/200'
                  alt='avatar'
                  width={0}
                  height={0}
                  sizes='100vw'
                />
                <div className='h-9 w-9 rounded-[99px] border-2 border-white' />
              </div>
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start'>
            <div className="font-['IBM Plex Sans'] text-sm font-normal leading-[18.20px] text-slate-400">
              Trusted already by 1.2k+
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
