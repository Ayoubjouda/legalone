import React from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Faq from '@/components/sections/Faq';
import LancezVous from '@/components/LancezVous';

import ServiceCard from '@/components/ServiceCard';
import { ArrowRight } from 'lucide-react';

import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import InovateSection from '@/components/sections/InovateSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import DashBoardSection from '@/components/sections/DashBoardSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import TestemonialSection from '@/components/sections/TestemonialSection';
export default function Home() {
  return (
    <div className='max-w-screen relative  z-0 flex  w-full flex-col items-center justify-start gap-32 overflow-hidden bg-white text-left   text-29xl text-black '>
      <HeroSection />
      <SponsorsSection />
      <InovateSection />
      <FeaturesSection />
      <DashBoardSection />
      <TestemonialSection />
      <Faq />
      <LancezVous />
      <Footer />
    </div>
  );
}
