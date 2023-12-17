import Faq from '@/components/sections/Faq';
import Footer from '@/components/sections/Footer';
import LancezVous from '@/components/sections/LancezVous';
import ServicesSection from '@/components/sections/ServicesSection';
import SponsorsSection from '@/components/sections/SponsorsSection';

const Page = () => {
  return (
    <div className='max-w-screen relative z-0 flex w-full  flex-col items-center justify-start gap-32   bg-white text-left   text-29xl text-black '>
      <ServicesSection
        title={`Créez votre entreprise
    ultra rapidement !`}
        description='La solution clé en main pour créer son entreprise en quelques clics : juridique, comptabilité, compte pro, domiciliation, assurance...'
        question='Quel sera votre domaine dactivité ?'
      />
      <SponsorsSection />

      <Faq />
      <LancezVous />
      <Footer />
    </div>
  );
};

export default Page;
