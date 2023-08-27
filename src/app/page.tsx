import React from 'react';
import Image from 'next/image';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="text-29xl font-headers-h2 relative box-border flex max-w-screen w-full flex-col items-center justify-start gap-[219px] overflow-hidden bg-gray-100 px-0 py-[46px] text-left text-gray-300 ">
      <Image
        className="absolute left-[1244px] top-[430px] z-[0] mx-[!important] my-0 h-6 w-6"
        alt=""
        src="/union.svg"
        width={0}
        height={0}
        sizes="100vw"
      />
      <Image
        className="absolute left-[161px] top-[312px] z-[1] mx-[!important] my-0 h-6 w-6"
        alt=""
        src="/union1.svg"
        width={0}
        height={0}
        sizes="100vw"
      />
      {/* <div className="font-button-nav absolute left-[calc(50%_-_477px)] top-[9px] z-[2] mx-[!important] my-0 lg:text-base text-sm  text-black">
        Bonjour, vous êtes parrainé ! Vous débloquez 2 mois offerts,
        sécurisez-les en commençant votre essai gratuit de Dougs.
      </div> */}
      {/* <Image
        className="absolute left-[1384px] top-[11px] z-[3] mx-[!important] my-0 h-5 w-5 shrink-0 overflow-hidden"
        alt=""
        src="/close.svg"
        width={0}
        height={0}
        sizes="100vw"
      /> */}
      <Image
        className="absolute left-[1087px] top-[138px] z-[4] mx-[!important] my-0 h-[29.88px] w-6"
        alt=""
        src="/subtract.svg"
        width={0}
        height={0}
        sizes="100vw"
      />
      <Image
        className="absolute left-[1277px] top-[201px] z-[5] mx-[!important] my-0 h-[24.18px] w-6"
        alt=""
        src="/union2.svg"
        width={0}
        height={0}
        sizes="100vw"
      />
      {/* <div className="bg-sandybrown-200 absolute left-[0px] top-[0px] z-[6] mx-[!important] my-0 h-[42px] w-full" /> */}
      <div className="font-satoshi z-[7] flex flex-col items-center justify-start gap-[45px] md:gap-[28px] self-stretch text-center text-base">
        <div className=" text-[45px] lg:text-45xl font-headers-h2 relative inline-block max-w-[869px] font-semibold tracking-[-0.04em] ">
          <p className="m-0">Une Entreprise sur mesure,</p>
          <p className="m-0">
            <span>{` un soutien `}</span>
            <span className="text-sandybrown-100">Inégalé.</span>
          </p>
        </div>
        <div className="relative inline-block max-w-[771px] leading-[20.5px] text-gray-700 px-8">
          <p className="m-0">
            Lancez-vous dès aujourd'hui et faites évoluer votre entreprise en un
            rien de temps ! et faites dès aujourd'hui et faites évoluer votre
            entreprise enLancez-vous dès aujourd'hui et faites évoluer votre
            entreprise en un rien.
          </p>
        </div>
        <div className="flex  max-w-[980px] flex-row items-end justify-center text-lg">
          <div className="flex flex-col md:flex-row items-end justify-center gap-[48px]">
            <HoverCard openDelay={300}>
              <HoverCardTrigger>
                <div className="border-sandybrown-100 box-border flex h-[88px] flex-col items-center justify-center gap-[7px] overflow-hidden rounded-md border-[1px] border-solid bg-white px-[18px] py-2.5 cursor-pointer">
                  <Image
                    className="relative h-[30px] w-[30px] shrink-0 overflow-hidden"
                    alt=""
                    src="/icons8company-1.svg"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center">
                      <b className="relative inline-block w-[190px] shrink-0">
                        Créer mon entreprise
                      </b>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <Link
                  href="/createsaas"
                  className="underline"
                >
                  Create sass
                </Link>
              </HoverCardContent>
            </HoverCard>

            <div className="border-sandybrown-100 box-border flex h-[88px] flex-col items-center justify-center gap-[7px] overflow-hidden rounded-md border-[1px] border-solid bg-white px-[18px] py-2.5">
              <Image
                className="relative h-[30px] w-[30px] shrink-0 overflow-hidden"
                alt=""
                src="/icons8settings-1-11.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                  <b className="relative inline-block w-[190px] shrink-0">
                    Modifier mes Status
                  </b>
                </div>
              </div>
            </div>
            <div className="text-mid border-sandybrown-100 box-border flex flex-col items-center justify-center gap-[7px] overflow-hidden rounded-md border-[1px] border-solid bg-white px-[18px] py-2.5">
              <Image
                className="relative "
                alt=""
                src="/vector1.svg"
                width={32}
                height={32}
                sizes="100vw"
              />
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                  <b className="relative inline-block   w-[190px] shrink-0">
                    Fin de Mon Entreprise
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-button-nav flex flex-col items-center justify-center gap-[17px] self-stretch px-0 md:py-[47px] ">
          <div className="flex flex-row items-center justify-center gap-[34px] w-full">
            <div className="border-darkgray relative box-border h-px max-w-[653px] w-full border-t-[1px] border-solid" />
            <div className="flex flex-row items-center justify-center w-full">
              <div className="flex flex-row items-center justify-start">
                <div className="relative font-semibold text-[16px] ">
                  TRUSTED BY{' '}
                </div>
              </div>
            </div>
            <div className="border-darkgray relative box-border h-px max-w-[653px] w-full border-t-[1px] border-solid" />
          </div>
          <div className="box-border flex max-w-[1438px] w-full flex-col md:flex-row items-center justify-center gap-[78px] md:px-[72px] py-6">
            <Image
              className="relative h-[41px] w-10"
              alt=""
              src="/poli1.svg"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              className="relative h-[35.56px] w-[120px]"
              alt=""
              src="/cubbies1.svg"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              className="relative h-[38px] w-[141px] shrink-0 overflow-hidden"
              alt=""
              src="/epoptique1.svg"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              className="relative h-[38px] w-[108.23px]"
              alt=""
              src="/sinta1.svg"
              width={0}
              height={0}
              sizes="100vw"
            />

            <Image
              className="relative h-[35.56px] w-[120px]"
              alt=""
              src="/cubbies1.svg"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
      <div className="font-satoshi z-[8] w-full  max-w-screen-xl flex flex-col md:flex-row items-center justify-center gap-[94px] text-base lg:text-xl text-black ">
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
        <div className="font-button-nav relative h-[504px]  w-full text-center text-xs">
          <div className="absolute right-[72px] top-[calc(50%_-_252px)] flex max-h-[476px] max-w-[483px] flex-col items-start justify-end">
            <div className="flex h-[479px] w-[423px] flex-col items-start justify-start">
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
                className="rounded-21xl relative mt-[-106px] h-[447px] w-[423px] object-cover"
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
      <div className="text-21xl z-[9] flex flex-col items-start justify-start gap-[10px] w-full px-8 max-w-screen-xl">
        <div className="flex  max-w-[367px] flex-col items-start justify-start gap-[19px]">
          <div className="flex  max-w-[367px] shrink-0 flex-col items-start justify-start gap-[6px] overflow-hidden">
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

        {/* //!Keep This one for last} */}
        <div className="text-185xl font-gilroy relative h-[602px] w-[1207.5px] text-black">
          <Image
            className="absolute left-[0px] top-[0px] h-[437.46px] w-[1017px]"
            alt=""
            src="/frame2.svg"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="absolute left-[124.5px] top-[0px] flex h-[602px] w-[280px] flex-col items-center justify-end ">
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
          <div className="absolute left-[591.5px] top-[0px] flex h-[470px] w-[280px] flex-col items-center justify-end ">
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
          <div className="absolute left-[927.5px] top-[0px] h-[222px] w-[280px]">
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
          </div>
        </div>
      </div>
      <div className="z-[10] flex flex-col items-center justify-start gap-[54px] text-center max-w-screen-xl">
        <div className="flex  max-w-[771px] flex-col items-center justify-start gap-[94px]">
          <div className="relative inline-block  max-w-[752px] shrink-0 font-medium">
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
          <div className="flex w-[373.33px] flex-row items-start justify-start shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] rounded-lg">
            <div className="rounded-3xs flex flex-1 flex-col items-start justify-start overflow-hidden bg-white p-5 rounded-lg">
              <div className="flex flex-col items-start justify-start self-stretch">
                <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0">
                  <div className="relative flex-1 leading-[140%]">
                    Faucibus eu condimentum maecenas sollicitudin vitae.
                  </div>
                </div>
                <div className="text-text-txt-tertiary font-headers-h2 hidden flex-row items-end justify-between self-stretch text-center text-sm">
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
              <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0 text-sm">
                <div className="flex flex-row items-start justify-start">
                  <div className="rounded-29xl flex flex-col items-start justify-start overflow-hidden bg-[url('/-image@3x.png')] bg-cover bg-[top] bg-no-repeat">
                    <div className="h-10 w-10" />
                  </div>
                </div>
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
          <div className="flex  w-[373.33px] flex-row items-start justify-start text-sm  shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] rounded-lg ">
            <div className=" flex flex-1 flex-row items-start justify-start overflow-hidden bg-white p-5 rounded-lg">
              <div className="flex flex-1 flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0 text-lg">
                  <div className="relative flex-1 leading-[140%]">{`Volutpat nec, dictumst adipiscing mauris molestie a. Proin sit libero tristique suspendisse. `}</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0">
                  <div className="flex flex-row items-start justify-start">
                    <div className="rounded-29xl flex flex-col items-start justify-start overflow-hidden bg-[url('/-image1@3x.png')] bg-cover bg-[top] bg-no-repeat">
                      <div className="h-10 w-10" />
                    </div>
                  </div>
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
          <div className="rounded-3xs flex  w-[373.33px]  flex-col items-start justify-start overflow-hidden bg-white p-5 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] rounded-lg">
            <div className="flex flex-col items-start justify-start self-stretch rounded-lg">
              <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0">
                <div className="relative flex-1 leading-[140%]">
                  Nisl, eget imperdiet pharetra consectetur.
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0 text-sm">
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-29xl flex flex-col items-start justify-start overflow-hidden bg-[url('/-image2@3x.png')] bg-cover bg-[top] bg-no-repeat">
                  <div className="h-10 w-10" />
                </div>
              </div>
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
          <div className="flex  w-[373.33px] flex-row items-start justify-start text-sm shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] rounded-lg">
            <div className="rounded-3xs flex  flex-row items-start justify-start overflow-hidden bg-white p-5 rounded-lg">
              <div className="flex flex-1 flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0 text-lg">
                  <div className="relative flex-1 leading-[140%]">{`There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. `}</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0">
                  <div className="flex flex-row items-start justify-start">
                    <div className="rounded-29xl flex flex-col items-start justify-start overflow-hidden bg-[url('/-image3@3x.png')] bg-cover bg-[top] bg-no-repeat">
                      <div className="h-10 w-10" />
                    </div>
                  </div>
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
          <div className="rounded-3xs flex   w-[373.33px] flex-row items-start justify-start overflow-hidden bg-white p-5 shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] rounded-lg">
            <div className="flex flex-1 flex-col items-start justify-start rounded-lg">
              <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0">
                <div className="relative flex-1 leading-[140%]">
                  Montes, ornare purus vestibulum, eget nec sem velit. Pharetra
                  dolor auctor facilisis nunc condimentum orci massa.
                </div>
              </div>
              <div className="flex flex-col items-start justify-start self-stretch text-sm">
                <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0">
                  <div className="flex flex-row items-start justify-start">
                    <div className="rounded-29xl flex flex-col items-start justify-start overflow-hidden bg-[url('/-image4@3x.png')] bg-cover bg-[top] bg-no-repeat">
                      <div className="h-10 w-10" />
                    </div>
                  </div>
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
          <div className="rounded-3xs flex  flex-row w-[373.33px] items-start justify-start overflow-hidden bg-white p-5 shadow-[0px_0px_25px_1px_rgba(0,_0,_0,_0.1)] rounded-lg">
            <div className="flex flex-1 flex-col items-start justify-start rounded-lg">
              <div className="flex flex-row items-start justify-start self-stretch px-0 pb-4 pt-0">
                <div className="relative flex-1 leading-[140%]">
                  What’s more, everything has been broken down in step-by-step
                  detail with real action plans including finding your niche.
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px] self-stretch px-0 pb-4 pt-0 text-sm">
                <div className="flex flex-row items-start justify-start">
                  <div className="rounded-29xl flex flex-col items-start justify-start overflow-hidden bg-[url('/-image5@3x.png')] bg-cover bg-[top] bg-no-repeat">
                    <div className="h-10 w-10" />
                  </div>
                </div>
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
      <div className="z-[11] flex flex-col max-w-screen-xl items-center w-full justify-center gap-[60px]   py-[120px] text-center">
        <div className="flex flex-col items-center justify-start">
          <div className="relative font-medium">We know you are curious!</div>
        </div>
        <div className="flex w-[1040px] flex-col items-start justify-start gap-[26px] text-left text-xl text-gray-500">
          <div className="flex flex-col items-start justify-start gap-[30px] self-stretch">
            <div className="flex flex-row items-center justify-between self-stretch">
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="relative leading-[24px] tracking-[0.01em]">
                  How do I choose the right supplement for my needs?
                </div>
                <div className="relative inline-block w-[939px] text-lg leading-[22px] tracking-[0.5px] text-gray-800">
                  We offer a personalized quiz that takes into account your
                  specific health goals, dietary preferences, and lifestyle
                  factors. Based on your responses, we provide tailored
                  recommendations to help you find the supplements that best
                  suit your needs.
                </div>
              </div>
              <Image
                className="relative h-6 w-6 shrink-0 overflow-hidden"
                alt=""
                src="/iconchevronup1.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="border-gainsboro relative box-border h-px self-stretch border-t-[1px] border-solid" />
            <div className="flex flex-row items-center justify-between self-stretch">
              <div className="relative leading-[24px] tracking-[0.01em]">
                Can I take multiple supplements together?
              </div>
              <Image
                className="relative h-6 w-6 shrink-0 overflow-hidden"
                alt=""
                src="/iconchevrondown1.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="border-gainsboro relative box-border h-px self-stretch border-t-[1px] border-solid" />
            <div className="flex flex-row items-center justify-between self-stretch">
              <div className="relative leading-[24px] tracking-[0.01em]">
                Are your supplements suitable for vegetarians/vegans?
              </div>
              <Image
                className="relative h-6 w-6 shrink-0 overflow-hidden"
                alt=""
                src="/iconchevrondown1.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="border-gainsboro relative box-border h-px self-stretch border-t-[1px] border-solid" />
          </div>
          <div />
        </div>
      </div>
      <div className="z-[12] flex flex-col items-start justify-start p-2.5  text-white max-w-screen-xl">
        <div className="flex flex-col items-center justify-start max-w-[1368px]  gap-[36px] ">
          <div className="bg-sandybrown-100 flex py-12  max-w-screen w-full mx-10 flex-row items-center   justify-center rounded-xl ">
            <div className="flex flex-col items-center justify-center  gap-[33px] ">
              <div className="relative font-semibold">
                Prêt à Lancer Votre Entreprise ?
              </div>
              <div className="font-satoshi relative inline-block max-w-[825px] text-center text-xl leading-[30px]">
                Rejoignez des milliers d'entrepreneurs qui ont déjà bénéficié de
                notre application. Inscrivez-vous dès aujourd'hui pour commencer
                gratuitement !
              </div>
              <div className="text-chocolate font-button-nav box-border flex max-w-[184px] flex-row items-center justify-center overflow-hidden rounded-md bg-white px-[18px] py-2.5 text-base">
                <div className="relative font-semibold">Commencez</div>
              </div>
            </div>
          </div>
          <div className="font-plus-jakarta-sans flex flex-col items-start justify-start gap-[32px] px-0 pb-0 pt-[31px] text-center text-xl text-black">
            <div className="flex flex-row items-start justify-start gap-[291px]">
              <div className="flex flex-col items-start justify-start gap-[14px]">
                <div className="relative">
                  <span>Legal</span>
                  <b>Center</b>
                </div>
                <div className="font-satoshi text-dimgray relative inline-block w-[285px] text-left text-base leading-[30px]">
                  Streamline inventory management and order fulfillment.
                </div>
              </div>
              <div className="font-headers-h2 flex flex-row items-start justify-center gap-[90px] text-left">
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative font-medium leading-[30px]">
                    Product
                  </div>
                  <div className="text-dimgray font-satoshi flex flex-col items-start justify-start gap-[2px] text-base">
                    <div className="relative leading-[30px]">Automation</div>
                    <div className="relative leading-[30px]">Payments</div>
                    <div className="relative leading-[30px]">Observability</div>
                    <div className="relative leading-[30px]">Reconcilation</div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative font-medium leading-[30px]">
                    Support
                  </div>
                  <div className="text-dimgray font-satoshi flex flex-col items-start justify-start gap-[2px] text-base">
                    <div className="relative leading-[30px]">On-boarding</div>
                    <div className="relative leading-[30px]">Help center</div>
                    <div className="relative leading-[30px]">Contact us</div>
                    <div className="relative leading-[30px]">Expert</div>
                    <div className="relative leading-[30px]">Status</div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative font-medium leading-[30px]">
                    Resources
                  </div>
                  <div className="text-dimgray font-satoshi flex flex-col items-start justify-start gap-[2px] text-base">
                    <div className="relative leading-[30px]">Community</div>
                    <div className="relative leading-[30px]">Affiliates</div>
                    <div className="relative leading-[30px]">Partnerships</div>
                    <div className="relative leading-[30px]">{`Perks & benefits`}</div>
                    <div className="relative leading-[30px]">API docs</div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative font-medium leading-[30px]">
                    Company
                  </div>
                  <div className="text-dimgray font-satoshi flex flex-col items-start justify-start gap-[2px] text-base">
                    <div className="relative leading-[30px]">About us</div>
                    <div className="relative leading-[30px]">Blog</div>
                    <div className="relative leading-[30px]">Press</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative box-border h-[0.6px] w-[1290.6px] border-t-[0.6px] border-solid border-white" />
            <div className="text-dimgray font-button-nav flex h-6 w-[1290px] flex-row items-center justify-start gap-[860px] text-left text-base">
              <div className="relative">
                © 2023 OrderEase. All rights reserved.
              </div>
              <div className="flex flex-row items-center justify-center gap-[27px]">
                <div className="relative">Privacy</div>
                <div className="relative">Terms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[0px] top-[3993px] z-[13] mx-[!important] my-0 h-[542px] w-[1440px]" />
    </div>
  );
}
