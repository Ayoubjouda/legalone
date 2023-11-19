import Faq from '@/components/sections/Faq';
import LancezVous from '@/components/sections/LancezVous';

import DashBoardSection from '@/components/sections/DashBoardSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import InovateSection from '@/components/sections/InovateSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import TestemonialSection from '@/components/sections/TestemonialSection';
export default function Home() {
  return (
    <div className='max-w-screen relative z-0 flex w-full  flex-col items-center justify-start gap-32   bg-white text-left   text-29xl text-black '>
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
