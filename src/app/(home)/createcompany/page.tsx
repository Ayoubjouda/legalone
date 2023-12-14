import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Button } from '@/components/ui/button';
import ServicesSection from '@/components/sections/ServicesSection';
import LancezVous from '@/components/sections/LancezVous';
import Footer from '@/components/sections/Footer';
import Faq from '@/components/sections/Faq';
export default function CreateCompany() {
  return (
    <div className='max-w-screen relative z-0 flex w-full  flex-col items-center justify-start gap-32   bg-white text-left   text-29xl text-black '>
      <ServicesSection
        title={`Créez votre entreprise
        ultra rapidement !`}
        description='La solution clé en main pour créer son entreprise en quelques clics : juridique, comptabilité, compte pro, domiciliation, assurance...'
        question='Quel sera votre domaine d’activité ?'
      />
      {/* <SponsorsSection />
      <InovateSection />
      <FeaturesSection />
      <DashBoardSection />
      <TestemonialSection /> */}
      <Faq />
      <LancezVous />
      <Footer />
    </div>
  );
}
