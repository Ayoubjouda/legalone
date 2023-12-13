import { FC } from 'react';
import Image from 'next/image';
interface FeaturesSectionProps {}

const FeaturesSection: FC<FeaturesSectionProps> = () => {
  return (
    <section className='flex h-fit w-full max-w-screen-xl flex-col justify-between gap-y-10 px-4 md:flex-row md:px-10'>
      {/* //section content */}
      <div className='space-y-10'>
        <div className='space-y-5'>
          {/* <p className='font-ibmPlexSans text-lg font-semibold leading-7 text-orange-600'>
            The best StartUp in town
          </p> */}
          <h2 className="font-['IBM  Plex Sans'] max-w-[635px] text-3xl font-medium text-stone-900 md:text-[50px] md:leading-[59.92px]">
            Créer votre entreprise facilement, en vous déchargeant de la
            papareasserie adminitrative
          </h2>
          <p className='max-w-md font-ibmPlexSans text-lg font-normal leading-7 text-stone-900'>
            Vous pourrez ainsi vous concentrer sur votre qctivité sqns vous
            soucier des tracas adminitratifs
          </p>
        </div>
        <div className='space-y-10'>
          <div className='flex gap-5'>
            <div className='flex gap-2'>
              <Image
                src={'./checkMark.svg'}
                alt=''
                height={20}
                width={20}
              />
              <p className='text-center font-ibmPlexSans text-base font-medium leading-normal text-stone-900'>
                Réduction des coûts
              </p>
            </div>
            <div className='flex gap-2'>
              <Image
                src={'./checkMark.svg'}
                alt=''
                height={20}
                width={20}
              />
              <p className='text-center font-ibmPlexSans text-base font-medium leading-normal text-stone-900'>
                Réduction des coûts
              </p>
            </div>
          </div>
          <p className='h-[1px] w-full bg-gray-200 '></p>
          <div className='flex '>
            <div className='font-ibmPlexSans text-base font-semibold leading-normal text-orange-600'>
              Lancer Vous
            </div>
            <Image
              src={''}
              alt=''
            />
          </div>
        </div>
      </div>
      {/* //section Image */}
      <Image
        alt=''
        className='h-full  max-h-[660px] w-full max-w-lg object-fill'
        src='https://ik.imagekit.io/zb5z1u26qn/LegalOne/div.framer-9f706l.png?updatedAt=1697035012834'
        width={0}
        height={0}
        sizes='100vw'
      />
    </section>
  );
};

export default FeaturesSection;
