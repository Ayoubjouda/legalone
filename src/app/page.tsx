import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Faq from '@/components/Faq';
import LancezVous from '@/components/LancezVous';

import ServiceCard from '@/components/ServiceCard';
import { ArrowRight } from 'lucide-react';
import {
  CREATE_COMPANY_DATA,
  DELETE_COMPANY_DATA,
  UPDATE_COMPANY_DATA,
} from '@/lib/constants';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div className="text-29xl z-0  relative bg-white  flex max-w-screen w-full flex-col items-center justify-start gap-32 overflow-hidden   text-left text-gray-300 ">
      <div className=" z-[7] flex flex-col items-center justify-start gap-[45px] mt-8  md:gap-12 self-stretch text-center text-base mx-2">
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
              Lancez-vous dès aujourd'hui et faites évoluer votre entreprise en
              un rien de temps ! et faites dès aujourd'hui et faites évoluer
              votre entreprise enLancez-vous dès aujourd'hui.
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
      </div>
      <div className="w-full px-4 md:px-8 lg:px-32 bg-white flex-col justify-center items-center ">
        <div className=" flex-col justify-center items-center gap-12 flex">
          <div className="text-slate-500 text-xl font-normal font-['Be Vietnam Pro'] leading-[27px]">
            Already chosen by the world leaders
          </div>
          <div className="flex justify-between flex-col md:flex-row items-center gap-8  w-full">
            <Image
              className=" w-32   md:w-24  lg:w-32  object-contain "
              alt=""
              src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg79002381_8468.png?updatedAt=1694943387954"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              className=" object-contain  w-32   md:w-24  lg:w-32 "
              alt=""
              src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-1305855712_3249.png?updatedAt=1694943387877"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              className=" object-contain  w-32   md:w-24  lg:w-32 "
              alt=""
              src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-1422926009_3286.png?updatedAt=1694943387875"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              className="object-contain  w-32   md:w-24  lg:w-32 "
              alt=""
              src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-1490657353_1089.png?updatedAt=1694943387904"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              className=" object-contain  w-32   md:w-24  lg:w-32 "
              alt=""
              src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-2143453188_4259.png?updatedAt=1694943387902"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              className=" object-contain  w-32   md:w-24  lg:w-32 "
              alt=""
              src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-936861110_4209.png?updatedAt=1694943387925"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
      <div className="font-satoshi z-[8] w-full   max-w-screen-xl flex flex-col md:flex-row items-center justify-center gap-[94px] text-base lg:text-xl text-black ">
        <div className="flex flex-col items-start justify-center gap-[25px] px-4 w-full">
          <div className="text-[45px] lg:text-29xl font-headers-h2 relative inline-block max-w-[549px] font-medium">
            Gagnez du temps précieux
          </div>
          <div className="text-grey relative inline-block max-w-[548px] leading-[30px] text-base">
            Dites adieu aux longues démarches administratives. Notre application
            simplifie chaque étape du processus de création d'entreprise, vous
            permettant de vous concentrer sur votre projet plutôt que sur les
            paperasses.
          </div>
          <div className="flex flex-col items-start justify-start gap-[18px]">
            <div className="flex flex-row items-center justify-center gap-[14px]">
              <Image
                className="relative h-[34px] w-[34px]"
                alt=""
                src="/group-6.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="relative leading-[30px]">
                Accompagnement personnalisé
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[14px]">
              <Image
                className="relative h-[34px] w-[34px]"
                alt=""
                src="/group-7.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="relative leading-[30px]">
                Vos données sont en sécurité
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[14px]">
              <Image
                className="relative h-[34px] w-[34px]"
                alt=""
                src="/group-81.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="relative leading-[30px]">
                Expertise Juridique à la Demande
              </div>
            </div>
          </div>
        </div>
        <div className="font-button-nav relative  h-[504px]   w-full text-center text-xs ">
          <div className="lg:absolute lg:right-[72px] lg:top-[calc(50%_-_252px)] flex max-h-[476px] w-full  max-w-[483px] flex-col items-start justify-end">
            <div className="flex h-[479px]  lg:w-[423px] flex-col items-start justify-start">
              <div className="relative h-[138.39px] w-[140px] mix-blend-normal">
                <div className="bg-soft-purple absolute left-[calc(50%_-_70px)] top-[calc(50%_-_69.19px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_54.86px)] top-[calc(50%_-_69.19px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_39.73px)] top-[calc(50%_-_69.19px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_24.59px)] top-[calc(50%_-_69.19px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_9.46px)] top-[calc(50%_-_69.19px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_5.68px)] top-[calc(50%_-_69.19px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_20.81px)] top-[calc(50%_-_69.19px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_35.95px)] top-[calc(50%_-_69.19px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_51.08px)] top-[calc(50%_-_69.19px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_66.22px)] top-[calc(50%_-_69.19px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_70px)] top-[calc(50%_-_54.06px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_54.86px)] top-[calc(50%_-_54.06px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_39.73px)] top-[calc(50%_-_54.06px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_24.59px)] top-[calc(50%_-_54.06px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_9.46px)] top-[calc(50%_-_54.06px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_5.68px)] top-[calc(50%_-_54.06px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_20.81px)] top-[calc(50%_-_54.06px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_35.95px)] top-[calc(50%_-_54.06px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_51.08px)] top-[calc(50%_-_54.06px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_66.22px)] top-[calc(50%_-_54.06px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_70px)] top-[calc(50%_-_38.92px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_54.86px)] top-[calc(50%_-_38.92px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_39.73px)] top-[calc(50%_-_38.92px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_24.59px)] top-[calc(50%_-_38.92px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_9.46px)] top-[calc(50%_-_38.92px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_5.68px)] top-[calc(50%_-_38.92px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_20.81px)] top-[calc(50%_-_38.92px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_35.95px)] top-[calc(50%_-_38.92px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_51.08px)] top-[calc(50%_-_38.92px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_66.22px)] top-[calc(50%_-_38.92px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_70px)] top-[calc(50%_-_23.79px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_54.86px)] top-[calc(50%_-_23.79px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_39.73px)] top-[calc(50%_-_23.79px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_24.59px)] top-[calc(50%_-_23.79px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_9.46px)] top-[calc(50%_-_23.79px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_5.68px)] top-[calc(50%_-_23.79px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_20.81px)] top-[calc(50%_-_23.79px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_35.95px)] top-[calc(50%_-_23.79px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_51.08px)] top-[calc(50%_-_23.79px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_66.22px)] top-[calc(50%_-_23.79px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_70px)] top-[calc(50%_-_8.65px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_54.86px)] top-[calc(50%_-_8.65px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_39.73px)] top-[calc(50%_-_8.65px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_24.59px)] top-[calc(50%_-_8.65px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_9.46px)] top-[calc(50%_-_8.65px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_5.68px)] top-[calc(50%_-_8.65px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_20.81px)] top-[calc(50%_-_8.65px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_35.95px)] top-[calc(50%_-_8.65px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_51.08px)] top-[calc(50%_-_8.65px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_66.22px)] top-[calc(50%_-_8.65px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_70px)] top-[calc(50%_+_6.48px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_54.86px)] top-[calc(50%_+_6.48px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_39.73px)] top-[calc(50%_+_6.48px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_24.59px)] top-[calc(50%_+_6.48px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_9.46px)] top-[calc(50%_+_6.48px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_5.68px)] top-[calc(50%_+_6.48px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_20.81px)] top-[calc(50%_+_6.48px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_35.95px)] top-[calc(50%_+_6.48px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_51.08px)] top-[calc(50%_+_6.48px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_66.22px)] top-[calc(50%_+_6.48px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_70px)] top-[calc(50%_+_21.62px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_70px)] top-[calc(50%_+_36.22px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_70px)] top-[calc(50%_+_50.81px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_70px)] top-[calc(50%_+_65.41px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_54.86px)] top-[calc(50%_+_21.62px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_54.86px)] top-[calc(50%_+_36.22px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_54.86px)] top-[calc(50%_+_50.81px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_54.86px)] top-[calc(50%_+_65.41px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_39.73px)] top-[calc(50%_+_21.62px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_39.73px)] top-[calc(50%_+_36.22px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_39.73px)] top-[calc(50%_+_50.81px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_39.73px)] top-[calc(50%_+_65.41px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_24.59px)] top-[calc(50%_+_21.62px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_24.59px)] top-[calc(50%_+_36.22px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_24.59px)] top-[calc(50%_+_50.81px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_24.59px)] top-[calc(50%_+_65.41px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_9.46px)] top-[calc(50%_+_21.62px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_9.46px)] top-[calc(50%_+_36.22px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_9.46px)] top-[calc(50%_+_50.81px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_-_9.46px)] top-[calc(50%_+_65.41px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_5.68px)] top-[calc(50%_+_21.62px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_5.68px)] top-[calc(50%_+_36.22px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_5.68px)] top-[calc(50%_+_50.81px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_5.68px)] top-[calc(50%_+_65.41px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_20.81px)] top-[calc(50%_+_21.62px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_20.81px)] top-[calc(50%_+_36.22px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_20.81px)] top-[calc(50%_+_50.81px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_20.81px)] top-[calc(50%_+_65.41px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_35.95px)] top-[calc(50%_+_21.62px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_35.95px)] top-[calc(50%_+_36.22px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_35.95px)] top-[calc(50%_+_50.81px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_35.95px)] top-[calc(50%_+_65.41px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_51.08px)] top-[calc(50%_+_21.62px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_51.08px)] top-[calc(50%_+_36.22px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_51.08px)] top-[calc(50%_+_50.81px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_51.08px)] top-[calc(50%_+_65.41px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_66.22px)] top-[calc(50%_+_21.62px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_66.22px)] top-[calc(50%_+_36.22px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_66.22px)] top-[calc(50%_+_50.81px)] h-[3.78px] w-[3.78px] rounded" />
                <div className="bg-soft-purple absolute left-[calc(50%_+_66.22px)] top-[calc(50%_+_65.41px)] h-[3.78px] w-[3.78px] rounded" />
              </div>
              <Image
                className="rounded-xl relative mt-[-106px] max-w-[340px] max-h-[447px] h-full w-full md:max-w-[423px] mx-3 object-cover"
                alt=""
                src="/pexelsphoto3205567-1@2x.png"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
          <Image
            className="absolute left-[518px] top-[317px] h-[23.46px] w-6"
            alt=""
            src="/group-13.svg"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="border-soft-purple absolute right-[0px] top-[calc(50%_+_105px)] box-border h-[147px] w-[305px] rounded border-[0.5px] border-solid bg-white shadow-[18px_23px_22px_rgba(57,_36,_124,_0.05)]">
            <div className="border-soft-purple absolute right-[8px] top-[calc(50%_-_20.5px)] box-border h-[41px] w-[289px] rounded border-[0.5px] border-solid" />
            <div className="border-soft-purple absolute right-[8px] top-[calc(50%_+_24.5px)] box-border h-[41px] w-[289px] rounded border-[0.5px] border-solid" />
            <div className="absolute right-[8px] top-[calc(50%_-_65.5px)] box-border flex w-[289px] flex-row items-start justify-start overflow-hidden rounded bg-black px-[68px] py-[5px] text-white">
              <div className="relative leading-[30px]">
                + Nouvelle Entreprise
              </div>
            </div>
            <div className="absolute right-[25px] top-[calc(50%_+_36px)] flex w-[253px] flex-row items-center justify-start gap-[148px]">
              <div className="relative font-medium">Poli</div>
              <div className="text-limegreen relative font-medium">Actif</div>
            </div>
            <div className="absolute right-[25px] top-[calc(50%_-_8.5px)] flex w-[253px] flex-row items-center justify-start gap-[76px]">
              <div className="relative font-medium">Stingra</div>
              <div className="text-chocolate relative font-medium">
                En Cours de Creation
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-21xl z-[9] flex  flex-col items-start justify-start gap-[10px]  w-full px-8 max-w-screen-xl">
        <div className="flex  w-[367px] flex-col items-start justify-start gap-[19px]">
          <div className="flex  w-[367px] shrink-0 flex-col items-start justify-start gap-[6px] overflow-hidden">
            <div className="relative font-medium leading-[48px] tracking-[-0.03em]">
              <p className="m-0">We have best team</p>
              <p className="m-0">and best process</p>
            </div>
            <div className="font-satoshi text-slategray relative inline-block max-w-[367px] text-base font-medium leading-[30px] tracking-[-0.02em]">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy.
            </div>
          </div>
          <div className="font-satoshi relative h-[47px] w-[162px] text-center text-base text-white">
            <div className="bg-sandybrown-100 absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full w-full rounded-md" />
            <div className="absolute left-[calc(50%_-_40px)] top-[calc(50%_-_14.5px)] font-medium leading-[30px] tracking-[-0.02em]">
              Get Started
            </div>
          </div>
        </div>
        <div className="text-185xl font-gilroy relative md:h-[600px] flex gap-8   w-full max-w-[1207.5px] flex-col  md:flex-row justify-center items-center text-black">
          <Image
            className="hidden md:absolute md:block left-[0px] top-[0px] h-[437.46px] w-[1017px]"
            alt=""
            src="/frame2.svg"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className=" md:absolute md:left-[124.5px] md:top-[380px]  md:h-[602px] w-[280px]  items-center justify-end ">
            <div className="relative h-[222px] w-[280px]">
              <div className="absolute left-[170px] top-[0px] font-black leading-[204px] tracking-[-0.02em] opacity-[0.05]">
                1
              </div>
              <div className="text-sandybrown-100 font-satoshi absolute left-[1px] top-[101px] flex h-[121px] w-[279px] flex-col items-start justify-start gap-[7px] text-lg">
                <div className="relative font-medium capitalize">
                  Remplissez le Formulaire
                </div>
                <div className="text-slategray relative inline-block w-[279px] text-base leading-[30px] tracking-[-0.02em]">{`Party we years to order allow asked of. We so opinion friends me message as delight. `}</div>
              </div>
              <div className="absolute left-[0px] top-[13px] box-border flex h-16 w-16 flex-col items-start justify-start rounded-xl bg-white p-5">
                <div className="rounded-3xs bg-silver relative h-[23px] w-[23px]" />
              </div>
            </div>
          </div>

          <div className="md:absolute left-[591.5px] top-[0px] flex md:h-[470px] w-[280px] flex-col items-center justify-end ">
            <div className="relative h-[222px] w-[280px]">
              <div className="absolute left-[170px] top-[0px] font-black leading-[204px] tracking-[-0.02em] opacity-[0.05]">
                2
              </div>
              <div className="text-sandybrown-100 font-satoshi absolute left-[1px] top-[101px] flex h-[121px] w-[279px] flex-col items-start justify-start gap-[7px] text-lg">
                <div className="relative font-medium capitalize">
                  Inscrivez-vous
                </div>
                <div className="text-slategray relative inline-block w-[279px] text-base leading-[30px] tracking-[-0.02em]">
                  His defective nor convinced residence own. Connection has put
                  impossible own apartments boisterous.
                </div>
              </div>
              <div className="absolute left-[0px] top-[13px] box-border flex h-16 w-16 flex-col items-start justify-start rounded-xl bg-white p-5">
                <div className="rounded-3xs bg-silver relative h-[23px] w-[23px]" />
              </div>
            </div>
          </div>
          <div className="md:absolute md:left-[927.5px] flex top-[0px] md:h-[222px] w-[280px]   flex-col items-center justify-end ">
            <div className="relative h-[222px] w-[280px]">
              <div className="absolute left-[170px] top-[0px] font-black leading-[204px] tracking-[-0.02em] opacity-[0.05]">
                3
              </div>
              <div className="text-sandybrown-100 font-satoshi absolute left-[1px] top-[101px] flex h-[121px] w-[279px] flex-col items-start justify-start gap-[7px] text-lg">
                <div className="relative font-medium capitalize">
                  Inscrivez-vous
                </div>
                <div className="text-slategray relative inline-block w-[279px] text-base leading-[30px] tracking-[-0.02em]">
                  His defective nor convinced residence own. Connection has put
                  impossible own apartments boisterous.
                </div>
              </div>
              <div className="absolute left-[0px] top-[13px] box-border flex h-16 w-16 flex-col items-start justify-start rounded-xl bg-white p-5">
                <div className="rounded-3xs bg-silver relative h-[23px] w-[23px]" />
              </div>
            </div>
          </div>
          {/* <div className="md:absolute md:left-[927.5px] flex top-[0px] md:h-[222px] w-[280px]">
            <div className="absolute left-[159px] top-[0px] font-black leading-[204px] tracking-[-0.02em] opacity-[0.05]">
              3
            </div>
            <div className="text-sandybrown-100 font-satoshi absolute left-[1px] top-[101px] flex h-[121px] w-[279px] flex-col items-start justify-start gap-[7px] text-lg">
              <div className="relative font-medium capitalize">
                Validation et Lancement
              </div>
              <div className="text-slategray relative inline-block w-[279px] text-base leading-[30px] tracking-[-0.02em]">
                From they fine john he give of rich he. They age and draw mrs
                like. Improving end distrusts may instantly.
              </div>
            </div>
            <div className="absolute left-[0px] top-[13px] box-border flex h-16 w-16 flex-col items-start justify-start rounded-xl bg-white p-5">
              <div className="rounded-3xs bg-silver relative h-[23px] w-[23px]" />
            </div>
          </div> */}
        </div>

        {/* //!Keep This one for last} */}
      </div>
      <div className="z-1 flex flex-col items-center justify-start gap-[54px] text-center max-w-screen-xl">
        <div className="flex  max-w-[771px] flex-col items-center justify-start gap-[94px]">
          <div className="relative inline-block text-4xl lg:text-5xl  max-w-[752px] shrink-0 font-medium">
            <span className="tracking-[-1px]">Rejoignez des mil</span>l
            <span className="tracking-[-1px]">
              iers de clients satisfaits !
            </span>
          </div>
          <div className="font-satoshi text-darkslategray-200 relative inline-block max-w-[771px] shrink-0 text-lg leading-[32px] tracking-[-0.5px]">
            Don't just take our word for it. Hear what our customers have to say
            about their experience with TechVantage.
          </div>
        </div>
        <div className="font-satoshi flex  max-w-[1180px] flex-row flex-wrap items-center justify-center gap-[30px] text-left text-lg text-black">
          <div className="flex w-[340.33px] flex-row items-start justify-start shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] rounded-lg">
            <div className="rounded-3xs flex flex-1 flex-col items-start justify-start overflow-hidden bg-white p-5 rounded-lg">
              <div className="flex flex-col items-start justify-start self-stretch">
                <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0">
                  <div className="relative flex-1 leading-[140%]">
                    Faucibus eu condimentum maecenas sollicitudin vitae.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0 text-sm">
                <Avatar>
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start self-stretch">
                    <div className="relative flex-1 font-medium leading-[140%]">
                      Darin Nguyen
                    </div>
                  </div>
                  <div className="text-darkslategray-100 font-headers-h2 flex flex-row items-start justify-start self-stretch">
                    <div className="relative flex-1 leading-[140%]">
                      France, Paris
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  w-[340.33px] flex-row items-start justify-start text-sm  shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] rounded-lg ">
            <div className=" flex flex-1 flex-row items-start justify-start overflow-hidden bg-white p-5 rounded-lg">
              <div className="flex flex-1 flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0 text-lg">
                  <div className="relative flex-1 leading-[140%]">{`Volutpat nec, dictumst adipiscing mauris molestie a. Proin sit libero tristique suspendisse. `}</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0">
                  <Avatar>
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-1 flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start self-stretch">
                      <div className="relative flex-1 font-medium leading-[140%]">
                        E4AC5D
                      </div>
                    </div>
                    <div className="text-darkslategray-100 font-headers-h2 flex flex-row items-start justify-start self-stretch">
                      <div className="relative flex-1 leading-[140%]">
                        France, Paris
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-text-txt-tertiary font-headers-h2 hidden flex-row items-end justify-between self-stretch text-center">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[140%]">
                        Show original
                      </div>
                      <div className="border-gray-3-level relative box-border h-px self-stretch border-t-[1px] border-solid" />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative leading-[140%]">22.03.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs flex  w-[340.33px]  flex-col items-start justify-start overflow-hidden bg-white p-5 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] rounded-lg">
            <div className="flex flex-col items-start justify-start self-stretch rounded-lg">
              <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0">
                <div className="relative flex-1 leading-[140%]">
                  Nisl, eget imperdiet pharetra consectetur.
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0 text-sm">
              <Avatar>
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex flex-1 flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start self-stretch">
                  <div className="relative flex-1 font-medium leading-[140%]">
                    Glen Barton
                  </div>
                </div>
                <div className="text-darkslategray-100 font-headers-h2 flex flex-row items-start justify-start self-stretch">
                  <div className="relative flex-1 leading-[140%]">
                    France, Paris
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  w-[340.33px] flex-row items-start justify-start text-sm shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] rounded-lg">
            <div className="rounded-3xs flex  flex-row items-start justify-start overflow-hidden bg-white p-5 rounded-lg">
              <div className="flex flex-1 flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0 text-lg">
                  <div className="relative flex-1 leading-[140%]">{`There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. `}</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0">
                  <Avatar>
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-1 flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start self-stretch">
                      <div className="relative flex-1 font-medium leading-[140%]">
                        E4AC5D
                      </div>
                    </div>
                    <div className="text-darkslategray-100 flex flex-row items-start justify-start self-stretch">
                      <div className="relative flex-1 leading-[140%]">
                        France, Paris
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-text-txt-tertiary font-headers-h2 hidden flex-row items-end justify-between self-stretch text-center">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[140%]">
                        Show original
                      </div>
                      <div className="border-gray-3-level relative box-border h-px self-stretch border-t-[1px] border-solid" />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative leading-[140%]">22.03.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs flex   w-[340.33px] flex-row items-start justify-start overflow-hidden bg-white p-5 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] rounded-lg">
            <div className="flex flex-1 flex-col items-start justify-start rounded-lg">
              <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0">
                <div className="relative flex-1 leading-[140%]">
                  Montes, ornare purus vestibulum, eget nec sem velit. Pharetra
                  dolor auctor facilisis nunc condimentum orci massa.
                </div>
              </div>
              <div className="flex flex-col items-start justify-start self-stretch text-sm">
                <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0">
                  <Avatar>
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-1 flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start self-stretch">
                      <div className="relative flex-1 font-medium leading-[140%]">
                        E4AC5D
                      </div>
                    </div>
                    <div className="text-darkslategray-100 flex flex-row items-start justify-start self-stretch">
                      <div className="relative flex-1 leading-[140%]">
                        France, Paris
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs flex  flex-row w-[340.33px] items-start justify-start overflow-hidden bg-white p-5 shadow-[0px_0px_25px_1px_rgba(0,_0,_0,_0.1)] rounded-lg">
            <div className="flex flex-1 flex-col items-start justify-start rounded-lg">
              <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0">
                <div className="relative flex-1 leading-[140%]">
                  What’s more, everything has been broken down in step-by-step
                  detail with real action plans including finding your niche.
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0 text-sm">
                <Avatar>
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start self-stretch">
                    <div className="relative flex-1 font-medium leading-[140%]">
                      Sacha Crouch
                    </div>
                  </div>
                  <div className="text-darkslategray-100 flex flex-row items-start justify-start self-stretch">
                    <div className="relative flex-1 leading-[140%]">
                      France, Paris
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <LancezVous />
      <Footer />
    </div>
  );
}
