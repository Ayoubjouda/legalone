'use client';
import Faq from '@/components/sections/Faq';
import LancezVous from '@/components/sections/LancezVous';

import DashBoardSection from '@/components/sections/DashBoardSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import InovateSection from '@/components/sections/InovateSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import TestemonialSection from '@/components/sections/TestemonialSection';
import ServicesSection from '@/components/sections/ServicesSection';
import { notFound, useSearchParams } from 'next/navigation';
export default function Home() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || notFound();
  return (
    <div className='max-w-screen relative z-0 flex w-full  flex-col items-center justify-start gap-32   bg-white text-left   text-29xl text-black '>
      <ServicesSection
        title={` Créez votre ${type} simplement et rapidement !`}
        description='La solution simple pour obtenir ses statuts signés et son KBIS rapidement et sans soucis.'
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
