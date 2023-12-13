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
    <div className='font-headers-h2 max-w-screen relative z-0  flex w-full flex-col items-center justify-start gap-[219px] overflow-hidden bg-gray-100 px-8 py-[46px] text-left text-29xl text-gray-300 '>
      <Image
        className='absolute left-[1244px] top-[430px] z-[0] mx-[!important] my-0 h-6 w-6'
        alt=''
        src='/union.svg'
        width={0}
        height={0}
        sizes='100vw'
      />
      <Image
        className='absolute left-[161px] top-[312px] z-[1] mx-[!important] my-0 h-6 w-6'
        alt=''
        src='/union1.svg'
        width={0}
        height={0}
        sizes='100vw'
      />
      <Image
        className='absolute left-[1087px] top-[138px] z-[2] mx-[!important] my-0 h-[29.88px] w-6'
        alt=''
        src='/subtract.svg'
        width={0}
        height={0}
        sizes='100vw'
      />
      <Image
        className='absolute left-[1277px] top-[201px] z-[3] mx-[!important] my-0 h-[24.18px] w-6'
        alt=''
        src='/union2.svg'
        width={0}
        height={0}
        sizes='100vw'
      />
      <div className='z-[4] flex flex-row items-start justify-start gap-[10px]'>
        <div className='flex flex-col items-start justify-start gap-[32px] lg:w-1/2'>
          <div className='relative mx-3 flex max-w-[807px] flex-col items-start justify-start gap-[16px]'>
            <div className='relative z-[0] inline-block max-w-[746px] text-3xl font-semibold leading-[62px] md:text-5xl'>
              Lancez votre entreprise en ligne avec LegalCenter.
            </div>
            <div className='font-paragraph-default relative z-[1] inline-block max-w-[540.39px] text-lg leading-[30px] text-neutral-600'>
              <p className='m-0'>
                Grâce à l'accompagnement de nos experts en création
                d'entreprise, créer votre société devient
              </p>
            </div>
            <Image
              className='absolute left-[563px] top-[67px] z-[2] mx-[!important] my-0 h-[29.88px] w-6'
              alt=''
              src='/subtract1.svg'
              width={0}
              height={0}
              sizes='100vw'
            />
            <Image
              className='absolute left-[770px] top-[191px] z-[3] mx-[!important] my-0 h-6 w-6'
              alt=''
              src='/union3.svg'
              width={0}
              height={0}
              sizes='100vw'
            />
          </div>
          <div className='box-border flex w-full max-w-[816px] shrink-0 flex-col flex-wrap gap-[10px] overflow-hidden p-2.5 text-center text-xl text-black md:flex-row md:items-start md:justify-start'>
            <div className='border-darkgray-100 flex basis-48 cursor-pointer flex-col items-center justify-center  gap-[11px] overflow-hidden rounded-2xl border-[1px] border-solid bg-white py-[17px] transition-all duration-300 ease-in-out hover:border-orange-500'>
              <Image
                className='relative h-10 w-10 object-cover'
                alt=''
                src='/icons8company64-4@2x.png'
                width={0}
                height={0}
                sizes='100vw'
              />
              <div className='flex flex-col items-center justify-center'>
                <div className='relative  text-base font-semibold'>
                  Entreprise individuelle
                </div>
                <div className='text-slategray-100 relative max-w-[150px] truncate text-xs leading-[31px]'>
                  Flexible pour les petites Activité
                </div>
              </div>
            </div>
            <div className='border-silver-200 flex basis-48 cursor-pointer flex-col items-center justify-center gap-[10px] overflow-hidden rounded-2xl border-[1px] border-solid bg-white px-5 py-[17px] transition-all duration-300 ease-in-out hover:border-orange-500'>
              <Image
                className='relative h-10 w-10 object-cover'
                alt=''
                src='/icons8company64-6@2x.png'
                width={0}
                height={0}
                sizes='100vw'
              />
              <div className='flex flex-col items-center justify-center'>
                <div className='relative  text-base font-semibold'>
                  SAS/SASU
                </div>
                <div className='text-slategray-100 relative max-w-[150px] truncate text-xs leading-[31px]'>
                  Plus de fléxibilité et bonne protection
                </div>
              </div>
            </div>
            <div className='border-darkgray-100 flex basis-48 cursor-pointer flex-col items-center justify-center gap-[10px] overflow-hidden rounded-2xl border-[1px] border-solid bg-white px-5 py-[17px] transition-all duration-300 ease-in-out hover:border-orange-500'>
              <Image
                className='relative h-10 w-10 object-cover'
                alt=''
                src='/icons8company64-5@2x.png'
                width={0}
                height={0}
                sizes='100vw'
              />
              <div className='flex flex-col items-center justify-center'>
                <div className='relative  text-base font-semibold'>
                  SARL/EURL
                </div>
                <div className='text-slategray-100 relative max-w-[150px] truncate text-xs leading-[31px]'>
                  Gestion simplifiée pour lancer un projet
                </div>
              </div>
            </div>
            <div className='border-darkgray-100 flex basis-48 cursor-pointer flex-col items-center justify-center gap-[10px] overflow-hidden rounded-2xl border-[1px] border-solid bg-white px-5 py-[17px] transition-all duration-300 ease-in-out hover:border-orange-500'>
              <Image
                className='relative h-10 w-10 object-cover'
                alt=''
                src='/icons8company64-3@2x.png'
                width={0}
                height={0}
                sizes='100vw'
              />
              <div className='flex flex-col items-center justify-center'>
                <div className='relative text-base font-semibold'>SCI</div>
                <div className='text-slategray-100 relative max-w-[150px] truncate text-xs leading-[31px]'>
                  Gestion simplifiée pour lancer un projet
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' font-button-nav relative hidden  w-1/2 flex-row items-start justify-end gap-[10px] text-5xl text-sandybrown-100 lg:flex'>
          <Image
            className='relative z-[0] max-h-[613.85px] w-full max-w-[553.03px] object-cover'
            alt=''
            src='/mask-group@2x.png'
            width={0}
            height={0}
            sizes='100vw'
          />
          <div className='absolute bottom-[9.38%] left-[32.37%] right-[2.28%] top-[77.71%] z-[1] mx-[!important] my-0 flex h-[12.91%] w-[65.35%] flex-col items-center justify-center rounded-t-[20.67px] rounded-bl-none rounded-br-[20.67px] bg-white shadow-[0px_19.960742950439453px_87.33px_rgba(32,_36,_138,_0.06)]'>
            <div className=' left-[10px] top-[5px] z-[0] mx-[!important] my-0 inline-block w-[341px] shrink-0 text-2xl font-semibold'>
              + de 350 000 entrepreneurs accompagnés
            </div>
          </div>
        </div>
      </div>
      <div className='text-dark-grey z-[5] box-border flex max-w-[696px] flex-col items-center justify-start gap-[27px] bg-gray-100 px-[50px] py-14 text-center text-xl'>
        <div className='flex flex-col items-center justify-center gap-[40px] self-stretch md:flex-row'>
          <Image
            className='relative h-[39.12px] w-[159.3px] shrink-0 overflow-hidden'
            alt=''
            src='/trustpilotlogo.svg'
            width={0}
            height={0}
            sizes='100vw'
          />
          <div className='flex flex-row items-start justify-start gap-[12px]'>
            <div className='flex flex-col items-start justify-start bg-green-600 p-[7.200000286102295px]'>
              <Image
                className='relative h-[33.6px] w-[33.6px]'
                alt=''
                src='/shape.svg'
                width={0}
                height={0}
                sizes='100vw'
              />
            </div>
            <div className='flex flex-col items-start justify-start bg-green-600 p-[7.200000286102295px]'>
              <Image
                className='relative h-[33.6px] w-[33.6px]'
                alt=''
                src='/shape.svg'
                width={0}
                height={0}
                sizes='100vw'
              />
            </div>
            <div className='flex flex-col items-start justify-start bg-green-600 p-[7.200000286102295px]'>
              <Image
                className='relative h-[33.6px] w-[33.6px]'
                alt=''
                src='/shape.svg'
                width={0}
                height={0}
                sizes='100vw'
              />
            </div>
            <div className='flex flex-col items-start justify-start bg-green-600 p-[7.200000286102295px]'>
              <Image
                className='relative h-[33.6px] w-[33.6px]'
                alt=''
                src='/shape.svg'
                width={0}
                height={0}
                sizes='100vw'
              />
            </div>
            <div className='flex flex-col items-start justify-start p-[7.200000286102295px] [background:linear-gradient(90deg,_#219653,_#219653_50%,_rgba(33,_150,_83,_0)_50.01%,_#d9d9d9_50.02%,_#d9d9d9_99.98%,_rgba(33,_150,_83,_0)_99.99%,_#d9d9d9)]'>
              <Image
                className='relative h-[33.6px] w-[33.6px]'
                alt=''
                src='/shape.svg'
                width={0}
                height={0}
                sizes='100vw'
              />
            </div>
          </div>
        </div>
        <div className='relative self-stretch font-medium uppercase leading-[26px]'>
          4.6 out of 5 based on 245 reviews
        </div>
      </div>
      <div className='z-[6] flex flex-col items-center justify-start gap-[65px] rounded-xl bg-orange-100 px-10 py-10 text-29xl text-black'>
        <div className='flex  max-w-[754px] flex-col items-center justify-start gap-[13px]'>
          <div className='relative text-center text-3xl font-medium tracking-[-0.03em] md:text-5xl md:leading-[60px]'>
            We help your business grow faster.
          </div>
          <div className=' text-slategray-200 ml-[34px] inline-block max-w-[604px] text-center text-base font-medium leading-[30px] tracking-[-0.02em]  md:text-xl'>
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient.
          </div>
        </div>
        <div className='flex max-w-[1321px] flex-col items-center justify-center gap-[95px]  text-gray-900'>
          <div className='flex w-full max-w-[1270px]  flex-col justify-center gap-10 lg:flex-row lg:items-start'>
            <div className='flex basis-96 flex-col items-center justify-start gap-10 rounded-xl  bg-white px-[27px] py-5'>
              <Image
                className='relative h-24 w-24 shrink-0 overflow-hidden'
                alt=''
                src='/icons8conflict-1.svg'
                width={0}
                height={0}
                sizes='100vw'
              />
              <b className='relative text-2xl leading-[30px] tracking-[-0.03em]'>
                La rapidité
              </b>
              <div className='font-inherit text-slategray-200 relative inline-block max-w-[318px] text-start text-base font-medium leading-[30px] tracking-[-0.02em]  text-slate-600 '>
                <p className='m-0'>
                  Vous démarrez votre projet plus rapidement :
                </p>
                <ul className='m-0 pl-5'>
                  <li className='mb-0'>
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
            <div className='flex basis-96 flex-row items-start  justify-center'>
              <div className='flex flex-col items-center justify-start gap-10 rounded-xl bg-white px-[27px] py-5'>
                <Image
                  className='relative h-24 w-24 shrink-0 overflow-hidden'
                  alt=''
                  src='/icons8easy-1.svg'
                  width={0}
                  height={0}
                  sizes='100vw'
                />
                <b className='relative text-2xl leading-[30px] tracking-[-0.03em]'>
                  La simplicité
                </b>
                <div className='font-inherit text-slategray-200 relative inline-block max-w-[318px] text-start text-base font-medium leading-[30px] tracking-[-0.02em]  text-slate-600 '>
                  <p className='m-0'>
                    Les démarches complexes deviennent simples et claires :
                  </p>
                  <ul className='m-0 pl-5'>
                    <li className='mb-0'>
                      Remplissez un questionnaire simplifié et 100% en ligne
                    </li>
                    <li>Nous gérons tous les échanges avec l'administration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex basis-96 flex-row items-center justify-center'>
              <div className=' flex flex-col items-center justify-start gap-10 rounded-xl bg-white px-[27px] py-5'>
                <Image
                  className='relative h-24 w-24 shrink-0 overflow-hidden'
                  alt=''
                  src='/icons8happy-1.svg'
                  width={0}
                  height={0}
                  sizes='100vw'
                />
                <b className='relative text-2xl leading-[30px] tracking-[-0.03em]'>
                  La sérénité
                </b>
                <div className='font-inherit text-slategray-200 relative max-w-[318px] self-stretch text-start  text-base font-medium leading-[30px] tracking-[-0.02em] text-slate-600'>
                  <p className='m-0'>
                    Confiez votre projet au N°1 de la création d'entreprise en
                    ligne :
                  </p>
                  <ul className='m-0 pl-5'>
                    <li className='mb-0'>
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
          <div className=' font-gilroy-semibold h-[60px] w-[259px] text-center text-base text-white'>
            <Button className=' h-full w-full rounded-md bg-chocolate text-lg font-semibold '>
              More About Platform
            </Button>
          </div>
        </div>
      </div>
      <div className='absolute left-[0px] top-[3993px] z-[7] mx-[!important] my-0 h-[542px] w-[1440px]' />
      <div className='z-[20] flex w-full max-w-screen-xl flex-col items-center justify-center gap-[60px]   py-[120px] text-center'>
        <div className='flex flex-col items-center justify-start'>
          <div className='relative font-medium'>We know you are curious!</div>
        </div>
        <div className='mx-3 w-full max-w-screen-md  text-base'>
          <Accordion
            type='multiple'
            className='font-Syne  cursor-pointer  rounded-md bg-orange-50 pt-2  text-lg font-[400] tracking-tight  text-black  '
            defaultValue={['item-1']}
          >
            <AccordionItem
              value='item-1'
              className='px-3 '
            >
              <AccordionTrigger>
                How do I choose the right supplement for my needs?
              </AccordionTrigger>
              <AccordionContent className=' flex items-start text-start text-base'>
                We offer a personalized quiz that takes into account your
                specific health goals, dietary preferences, and lifestyle
                factors. Based on your responses, we provide tailored
                recommendations to help you find the supplements that best suit
                your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-23'
              className='px-3'
            >
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent className=' flex items-start text-start text-base'>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-333'
              className='px-3'
            >
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent className=' flex items-start text-start text-base'>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className='z-[12] flex w-full max-w-screen-xl flex-col items-start justify-start   p-2.5 text-white '>
        <div className='flex w-full max-w-screen-xl flex-col items-center justify-start  gap-[36px] '>
          <div className='mx-[100px] flex w-full  flex-row   items-center justify-center rounded-xl   bg-sandybrown-100 py-12 '>
            <div className='flex flex-col items-center  justify-center  gap-[33px] '>
              <div className='relative text-center text-4xl font-semibold lg:text-6xl'>
                Prêt à Lancer Votre Entreprise ?
              </div>
              <div className='font-satoshi relative  max-w-[825px] text-center text-base leading-[30px] md:text-xl'>
                Rejoignez des milliers d'entrepreneurs qui ont déjà bénéficié de
                notre application. Inscrivez-vous dès aujourd'hui pour commencer
                gratuitement !
              </div>
              <div className='font-button-nav flex  max-w-[184px] cursor-pointer flex-row items-center justify-center overflow-hidden rounded-md bg-white px-[18px] py-2.5 text-base text-chocolate'>
                <div className='relative font-semibold'>Commencez</div>
              </div>
            </div>
          </div>
          <div className='font-plus-jakarta-sans flex w-full flex-col items-start justify-start gap-[32px] px-0 pb-0 pt-[31px] text-center text-xl text-black'>
            <div className='flex flex-col items-start justify-start gap-10 lg:flex-row lg:gap-[291px]'>
              <div className='flex flex-col items-start justify-start gap-[14px]'>
                <div className='relative'>
                  <span>Legal</span>
                  <b>Center</b>
                </div>
                <div className='font-satoshi relative inline-block max-w-[285px] text-left text-base leading-[30px] text-dimgray'>
                  Streamline inventory management and order fulfillment.
                </div>
              </div>
              <div className='font-headers-h2 flex flex-col items-start justify-center gap-[90px] text-left md:flex-row'>
                <div className='flex flex-col items-start justify-start gap-[12px]'>
                  <div className='relative font-medium leading-[30px]'>
                    Product
                  </div>
                  <div className='font-satoshi flex flex-col items-start justify-start gap-[2px] text-base text-dimgray'>
                    <div className='relative leading-[30px]'>Automation</div>
                    <div className='relative leading-[30px]'>Payments</div>
                    <div className='relative leading-[30px]'>Observability</div>
                    <div className='relative leading-[30px]'>Reconcilation</div>
                  </div>
                </div>
                <div className='flex flex-col items-start justify-start gap-[12px]'>
                  <div className='relative font-medium leading-[30px]'>
                    Support
                  </div>
                  <div className='font-satoshi flex flex-col items-start justify-start gap-[2px] text-base text-dimgray'>
                    <div className='relative leading-[30px]'>On-boarding</div>
                    <div className='relative leading-[30px]'>Help center</div>
                    <div className='relative leading-[30px]'>Contact us</div>
                    <div className='relative leading-[30px]'>Expert</div>
                    <div className='relative leading-[30px]'>Status</div>
                  </div>
                </div>
                <div className='flex flex-col items-start justify-start gap-[12px]'>
                  <div className='relative font-medium leading-[30px]'>
                    Resources
                  </div>
                  <div className='font-satoshi flex flex-col items-start justify-start gap-[2px] text-base text-dimgray'>
                    <div className='relative leading-[30px]'>Community</div>
                    <div className='relative leading-[30px]'>Affiliates</div>
                    <div className='relative leading-[30px]'>Partnerships</div>
                    <div className='relative leading-[30px]'>{`Perks & benefits`}</div>
                    <div className='relative leading-[30px]'>API docs</div>
                  </div>
                </div>
                <div className='flex flex-col items-start justify-start gap-[12px]'>
                  <div className='relative font-medium leading-[30px]'>
                    Company
                  </div>
                  <div className='font-satoshi flex flex-col items-start justify-start gap-[2px] text-base text-dimgray'>
                    <div className='relative leading-[30px]'>About us</div>
                    <div className='relative leading-[30px]'>Blog</div>
                    <div className='relative leading-[30px]'>Press</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative box-border h-[0.6px] w-[1290.6px] border-t-[0.6px] border-solid border-white' />
            <div className='font-button-nav flex h-6 w-[1290px] flex-row items-center justify-start gap-[860px] text-left text-base text-dimgray'>
              <div className='relative'>
                © 2023 OrderEase. All rights reserved.
              </div>
              <div className='flex flex-row items-center justify-center gap-[27px]'>
                <div className='relative'>Privacy</div>
                <div className='relative'>Terms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute left-[0px] top-[3993px] z-[13] mx-[!important] my-0 h-[542px] w-[1440px]' />
    </div>
  );
}
