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
    <section className=" z-[7] flex flex-col items-center justify-start gap-[45px] mt-8  md:gap-12 self-stretch text-center text-base mx-2">
      <div className="flex flex-col items-center gap-6">
        <div className="h-[39.40px] pl-2 pr-3 py-1.5 bg-white bg-opacity-40 rounded-[50px] border border-black border-opacity-5 justify-start items-center gap-[11.69px] inline-flex">
          <div className="pl-[11.75px] pr-[11.55px] pt-[3.50px] pb-[4.90px] bg-orange-500 bg-opacity-10 rounded-2xl justify-center items-center flex">
            <div className="text-center text-redish text-xs md:text-sm font-medium font-ibmPlexSans leading-[18.90px]">
              Nouveau
            </div>
          </div>
          <div className="justify-start items-center gap-[3.34px] flex">
            <div className="pb-[0.90px] flex-col justify-start items-center inline-flex">
              <div className="text-center text-redish text-xs sm:text-sm font-medium font-ibmPlexSans leading-[18.90px]">
                Votre entreprise en quelques secondes
              </div>
            </div>
            <div className="w-4 h-4 flex-col justify-start items-start inline-flex">
              <ArrowRight color="#D86949" />
            </div>
          </div>
        </div>
        <div className=" text-[45px] lg:text-45xl relative font-ibmPlexSans  inline-block max-w-[300px] sm:max-w-[420px] md:max-w-[869px] font-medium tracking-[-0.02em] leading-[45px] md:leading-[80px] ">
          <p className="m-0">Une Entreprise sur mesure,</p>
          <p className="m-0">
            un soutien
            <span className="text-redish after:content-excited after:absolute md:after:top-14 sm:after:top-16 after:top-[70%]  lg:after:right-24   sm:after:right-8 sm:after:w-2 lg:after:w-8 md:after:right-20 md:after:w-2">
              {' '}
              Inégalé.
            </span>
          </p>
        </div>
        <div className="relative  max-w-[590px] text-lg leading-6 text-gray-700 px-8">
          <p className="m-0">
            Lancez-vous dès aujourd'hui et faites évoluer votre entreprise en un
            rien de temps ! et faites dès aujourd'hui et faites évoluer votre
            entreprise enLancez-vous dès aujourd'hui.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-12  max-w-[980px] items-center justify-center ">
        <div className="flex flex-col md:flex-row items-end justify-center gap-[48px]">
          <ServiceCard
            title="Création d'entreprise"
            image="/icons8company-1.svg"
            links={CREATE_COMPANY_DATA}
            description="SAS, SARL, Auto-entreprise"
          />
          <ServiceCard
            title="Modification de status"
            image="/icons8settings-1-11.svg"
            links={UPDATE_COMPANY_DATA}
            description="Transfert de siège, changement ..."
          />
          <ServiceCard
            title="Fermeture d'entreprise"
            image="/vector1.svg"
            links={DELETE_COMPANY_DATA}
            description="Dissolution, liquidation et radiation"
          />
        </div>
        <div className="max-w-[290px] h-9 justify-center items-center gap-4 inline-flex">
          <div className="justify-start items-center flex">
            <div className="w-[25px] flex-col justify-start items-start inline-flex">
              <div className="h-[35.71px] rounded-[99px] flex-col justify-start items-start flex">
                <Image
                  className="w-[35.71px] h-[35.71px] relative rounded-[99px]"
                  src="https://i.pravatar.cc/300"
                  alt="avatar"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <div className="w-[35.71px] h-[35.71px] rounded-[99px] border-2 border-white" />
              </div>
            </div>
            <div className="w-[25px] flex-col justify-start items-start inline-flex">
              <div className="h-9 rounded-[99px] flex-col justify-start items-start flex">
                <Image
                  className="w-9 h-9 relative rounded-[99px]"
                  src="https://i.pravatar.cc/250"
                  alt="avatar"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <div className="w-9 h-9 rounded-[99px] border-2 border-white" />
              </div>
            </div>
            <div className="w-[25px] flex-col justify-start items-start inline-flex">
              <div className="h-9 rounded-[99px] flex-col justify-start items-start flex">
                <Image
                  className="w-9 h-9 relative rounded-[99px]"
                  src="https://i.pravatar.cc/400"
                  alt="avatar"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <div className="w-9 h-9 rounded-[99px] border-2 border-white" />
              </div>
            </div>
            <div className="w-[25px] flex-col justify-start items-start inline-flex">
              <div className="h-9 rounded-[99px] flex-col justify-start items-start flex">
                <Image
                  className="w-9 h-9 relative rounded-[99px]"
                  src="https://i.pravatar.cc/200"
                  alt="avatar"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <div className="w-9 h-9 rounded-[99px] border-2 border-white" />
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-slate-400 text-sm font-normal font-['IBM Plex Sans'] leading-[18.20px]">
              Trusted already by 1.2k+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
