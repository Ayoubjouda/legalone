import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Button } from '@/components/ui/button';
export default function CreateCompany() {
  return (
    <div className="text-29xl z-0 font-headers-h2 relative  flex max-w-screen w-full flex-col items-center justify-start gap-[219px] overflow-hidden bg-gray-100 px-8 py-[46px] text-left text-gray-300 ">
      <Image
        className="absolute my-0 mx-[!important] top-[430px] left-[1244px] w-6 h-6 z-[0]"
        alt=""
        src="/union.svg"
        width={0}
        height={0}
        sizes="100vw"
      />
      <Image
        className="absolute my-0 mx-[!important] top-[312px] left-[161px] w-6 h-6 z-[1]"
        alt=""
        src="/union1.svg"
        width={0}
        height={0}
        sizes="100vw"
      />
      <Image
        className="absolute my-0 mx-[!important] top-[138px] left-[1087px] w-6 h-[29.88px] z-[2]"
        alt=""
        src="/subtract.svg"
        width={0}
        height={0}
        sizes="100vw"
      />
      <Image
        className="absolute my-0 mx-[!important] top-[201px] left-[1277px] w-6 h-[24.18px] z-[3]"
        alt=""
        src="/union2.svg"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-row items-start justify-start gap-[10px] z-[4]">
        <div className="flex flex-col items-start justify-start lg:w-1/2 gap-[32px]">
          <div className="max-w-[807px] flex flex-col items-start justify-start relative gap-[16px] mx-3">
            <div className="relative leading-[62px] text-3xl md:text-5xl font-semibold inline-block max-w-[746px] z-[0]">
              Lancez votre entreprise en ligne avec LegalCenter.
            </div>
            <div className="relative text-lg leading-[30px] font-paragraph-default text-neutral-600 inline-block max-w-[540.39px] z-[1]">
              <p className="m-0">
                Grâce à l'accompagnement de nos experts en création
                d'entreprise, créer votre société devient
              </p>
            </div>
            <Image
              className="absolute my-0 mx-[!important] top-[67px] left-[563px] w-6 h-[29.88px] z-[2]"
              alt=""
              src="/subtract1.svg"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              className="absolute my-0 mx-[!important] top-[191px] left-[770px] w-6 h-6 z-[3]"
              alt=""
              src="/union3.svg"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="max-w-[816px] w-full overflow-hidden shrink-0 flex flex-col md:flex-row flex-wrap p-2.5 box-border md:items-start md:justify-start gap-[10px] text-center text-xl text-black">
            <div className="rounded-2xl bg-white overflow-hidden basis-48  flex flex-col flex-wrap py-[17px] px-5 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-darkgray-100 hover:border-orange-500 transition-all ease-in-out duration-300">
              <Image
                className="relative w-10 h-10 object-cover"
                alt=""
                src="/icons8company64-2@2x.png"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="flex flex-col items-center justify-center">
                <div className="relative text-base font-semibold">
                  Auto-entrepreneur
                </div>
                <div className="relative text-xs leading-[31px] text-slategray-100 truncate max-w-[150px]">
                  Gestion simplifiée pour lancer un projet
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white overflow-hidden basis-48 flex flex-col py-[17px]  items-center justify-center gap-[11px] cursor-pointer border-[1px] border-solid border-darkgray-100 hover:border-orange-500 transition-all ease-in-out duration-300">
              <Image
                className="relative w-10 h-10 object-cover"
                alt=""
                src="/icons8company64-4@2x.png"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="flex flex-col items-center justify-center">
                <div className="relative  font-semibold text-base">
                  Entreprise individuelle
                </div>
                <div className="relative text-xs leading-[31px] text-slategray-100 truncate max-w-[150px]">
                  Flexible pour les petites Activité
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white overflow-hidden flex flex-col basis-48 py-[17px] px-5 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-silver-200 hover:border-orange-500 transition-all ease-in-out duration-300">
              <Image
                className="relative w-10 h-10 object-cover"
                alt=""
                src="/icons8company64-6@2x.png"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="flex flex-col items-center justify-center">
                <div className="relative  font-semibold text-base">
                  SAS/SASU
                </div>
                <div className="relative text-xs leading-[31px] text-slategray-100 truncate max-w-[150px]">
                  Plus de fléxibilité et bonne protection
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white overflow-hidden flex basis-48 flex-col py-[17px] px-5 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-darkgray-100 hover:border-orange-500 transition-all ease-in-out duration-300">
              <Image
                className="relative w-10 h-10 object-cover"
                alt=""
                src="/icons8company64-5@2x.png"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="flex flex-col items-center justify-center">
                <div className="relative  font-semibold text-base">
                  SARL/EURL
                </div>
                <div className="relative text-xs leading-[31px] text-slategray-100 truncate max-w-[150px]">
                  Gestion simplifiée pour lancer un projet
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white overflow-hidden flex basis-48 flex-col py-[17px] px-5 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-darkgray-100 hover:border-orange-500 transition-all ease-in-out duration-300">
              <Image
                className="relative w-10 h-10 object-cover"
                alt=""
                src="/icons8company64-3@2x.png"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="flex flex-col items-center justify-center">
                <div className="relative font-semibold text-base">SCI</div>
                <div className="relative text-xs leading-[31px] text-slategray-100 truncate max-w-[150px]">
                  Gestion simplifiée pour lancer un projet
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-row hidden lg:flex  items-start justify-end relative gap-[10px] text-5xl text-sandybrown-100 font-button-nav w-1/2">
          <Image
            className="relative max-w-[553.03px] w-full max-h-[613.85px] object-cover z-[0]"
            alt=""
            src="/mask-group@2x.png"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="my-0 mx-[!important] absolute h-[12.91%] w-[65.35%] top-[77.71%] right-[2.28%] bottom-[9.38%] left-[32.37%] rounded-t-[20.67px] rounded-br-[20.67px] rounded-bl-none bg-white shadow-[0px_19.960742950439453px_87.33px_rgba(32,_36,_138,_0.06)] flex flex-col items-center justify-center z-[1]">
            <div className=" my-0 mx-[!important] top-[5px] left-[10px] font-semibold inline-block w-[341px] text-2xl shrink-0 z-[0]">
              + de 350 000 entrepreneurs accompagnés
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 max-w-[696px] flex flex-col py-14 px-[50px] box-border items-center justify-start gap-[27px] z-[5] text-center text-xl text-dark-grey">
        <div className="self-stretch flex flex-col md:flex-row items-center justify-center gap-[40px]">
          <Image
            className="relative w-[159.3px] h-[39.12px] overflow-hidden shrink-0"
            alt=""
            src="/trustpilotlogo.svg"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <div className="bg-green-600 flex flex-col p-[7.200000286102295px] items-start justify-start">
              <Image
                className="relative w-[33.6px] h-[33.6px]"
                alt=""
                src="/shape.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="bg-green-600 flex flex-col p-[7.200000286102295px] items-start justify-start">
              <Image
                className="relative w-[33.6px] h-[33.6px]"
                alt=""
                src="/shape.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="bg-green-600 flex flex-col p-[7.200000286102295px] items-start justify-start">
              <Image
                className="relative w-[33.6px] h-[33.6px]"
                alt=""
                src="/shape.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="bg-green-600 flex flex-col p-[7.200000286102295px] items-start justify-start">
              <Image
                className="relative w-[33.6px] h-[33.6px]"
                alt=""
                src="/shape.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="[background:linear-gradient(90deg,_#219653,_#219653_50%,_rgba(33,_150,_83,_0)_50.01%,_#d9d9d9_50.02%,_#d9d9d9_99.98%,_rgba(33,_150,_83,_0)_99.99%,_#d9d9d9)] flex flex-col p-[7.200000286102295px] items-start justify-start">
              <Image
                className="relative w-[33.6px] h-[33.6px]"
                alt=""
                src="/shape.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch relative leading-[26px] uppercase font-medium">
          4.6 out of 5 based on 245 reviews
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[65px] z-[6] text-29xl text-black bg-orange-100 rounded-xl py-10 px-10">
        <div className="max-w-[754px]  flex flex-col items-center justify-start gap-[13px]">
          <div className="relative tracking-[-0.03em] text-3xl md:text-5xl md:leading-[60px] text-center font-medium">
            We help your business grow faster.
          </div>
          <div className=" text-base md:text-xl tracking-[-0.02em] leading-[30px] font-medium text-slategray-200 text-center inline-block max-w-[604px]  ml-[34px]">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient.
          </div>
        </div>
        <div className="max-w-[1321px] flex flex-col items-center justify-center gap-[95px]  text-gray-900">
          <div className="max-w-[1270px] w-full flex  flex-col lg:flex-row lg:items-start justify-center gap-10">
            <div className="rounded-xl bg-white flex flex-col py-5 px-[27px] basis-96  items-center justify-start gap-10">
              <Image
                className="relative w-24 h-24 overflow-hidden shrink-0"
                alt=""
                src="/icons8conflict-1.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
              <b className="relative tracking-[-0.03em] text-2xl leading-[30px]">
                La rapidité
              </b>
              <div className="relative text-base text-slate-600 tracking-[-0.02em] leading-[30px] font-medium font-inherit text-slategray-200 inline-block max-w-[318px]  text-start ">
                <p className="m-0">
                  Vous démarrez votre projet plus rapidement :
                </p>
                <ul className="m-0 pl-5">
                  <li className="mb-0">
                    Votre dossier est traité et envoyé au greffe par notre
                    équipe sous 24h
                  </li>
                  <li>
                    Nous accélérons votre démarche grâce à notre réseau de
                    partenaires
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center  basis-96">
              <div className="rounded-xl bg-white flex flex-col py-5 px-[27px] items-center justify-start gap-10">
                <Image
                  className="relative w-24 h-24 overflow-hidden shrink-0"
                  alt=""
                  src="/icons8easy-1.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <b className="relative tracking-[-0.03em] leading-[30px] text-2xl">
                  La simplicité
                </b>
                <div className="relative text-base text-slate-600 tracking-[-0.02em] leading-[30px] font-medium font-inherit text-slategray-200 inline-block max-w-[318px]  text-start ">
                  <p className="m-0">
                    Les démarches complexes deviennent simples et claires :
                  </p>
                  <ul className="m-0 pl-5">
                    <li className="mb-0">
                      Remplissez un questionnaire simplifié et 100% en ligne
                    </li>
                    <li>Nous gérons tous les échanges avec l'administration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center basis-96">
              <div className=" rounded-xl bg-white flex flex-col py-5 px-[27px] items-center justify-start gap-10">
                <Image
                  className="relative w-24 h-24 overflow-hidden shrink-0"
                  alt=""
                  src="/icons8happy-1.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <b className="relative tracking-[-0.03em] leading-[30px] text-2xl">
                  La sérénité
                </b>
                <div className="self-stretch relative text-base text-slate-600 tracking-[-0.02em] leading-[30px]  font-medium font-inherit text-start text-slategray-200 max-w-[318px]">
                  <p className="m-0">
                    Confiez votre projet au N°1 de la création d'entreprise en
                    ligne :
                  </p>
                  <ul className="m-0 pl-5">
                    <li className="mb-0">
                      Nos juristes experts vous accompagnent et vérifient votre
                      dossier
                    </li>
                    <li>
                      Notre équipe a déjà accompagné 350 000 entrepreneurs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[259px] h-[60px] text-center text-base text-white font-gilroy-semibold">
            <Button className=" h-full w-full text-lg font-semibold rounded-md bg-chocolate ">
              More About Platform
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute my-0 mx-[!important] top-[3993px] left-[0px] w-[1440px] h-[542px] z-[7]" />
      <div className="z-[20] flex flex-col max-w-screen-xl items-center w-full justify-center gap-[60px]   py-[120px] text-center">
        <div className="flex flex-col items-center justify-start">
          <div className="relative font-medium">We know you are curious!</div>
        </div>
        <div className="w-full text-base max-w-screen-md  mx-3">
          <Accordion
            type="multiple"
            className="cursor-pointer  pt-2  font-Syne font-[400] tracking-tight  text-lg text-black bg-orange-50  rounded-md  "
            defaultValue={['item-1']}
          >
            <AccordionItem
              value="item-1"
              className="px-3 "
            >
              <AccordionTrigger>
                How do I choose the right supplement for my needs?
              </AccordionTrigger>
              <AccordionContent className=" flex items-start text-start text-base">
                We offer a personalized quiz that takes into account your
                specific health goals, dietary preferences, and lifestyle
                factors. Based on your responses, we provide tailored
                recommendations to help you find the supplements that best suit
                your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-23"
              className="px-3"
            >
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent className=" flex items-start text-start text-base">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-333"
              className="px-3"
            >
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent className=" flex items-start text-start text-base">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="z-[12] flex flex-col items-start justify-start p-2.5 w-full   text-white max-w-screen-xl ">
        <div className="flex flex-col items-center justify-start w-full max-w-screen-xl  gap-[36px] ">
          <div className="bg-sandybrown-100 flex py-12  w-full   flex-row items-center mx-[100px]   justify-center rounded-xl ">
            <div className="flex flex-col items-center  justify-center  gap-[33px] ">
              <div className="relative font-semibold text-4xl lg:text-6xl text-center">
                Prêt à Lancer Votre Entreprise ?
              </div>
              <div className="font-satoshi relative  max-w-[825px] text-center text-base md:text-xl leading-[30px]">
                Rejoignez des milliers d'entrepreneurs qui ont déjà bénéficié de
                notre application. Inscrivez-vous dès aujourd'hui pour commencer
                gratuitement !
              </div>
              <div className="text-chocolate font-button-nav  flex max-w-[184px] flex-row items-center justify-center overflow-hidden rounded-md bg-white px-[18px] py-2.5 text-base cursor-pointer">
                <div className="relative font-semibold">Commencez</div>
              </div>
            </div>
          </div>
          <div className="font-plus-jakarta-sans flex flex-col w-full items-start justify-start gap-[32px] px-0 pb-0 pt-[31px] text-center text-xl text-black">
            <div className="flex flex-col gap-10 lg:flex-row items-start justify-start lg:gap-[291px]">
              <div className="flex flex-col items-start justify-start gap-[14px]">
                <div className="relative">
                  <span>Legal</span>
                  <b>Center</b>
                </div>
                <div className="font-satoshi text-dimgray relative inline-block max-w-[285px] text-left text-base leading-[30px]">
                  Streamline inventory management and order fulfillment.
                </div>
              </div>
              <div className="font-headers-h2 flex flex-col md:flex-row items-start justify-center gap-[90px] text-left">
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
