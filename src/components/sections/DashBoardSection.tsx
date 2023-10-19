import { FC } from 'react';
import Image from 'next/image';

interface DashBoardSectionProps {}

const DashBoardSection: FC<DashBoardSectionProps> = () => {
  return (
    <section className='flex  h-fit w-full max-w-screen-xl flex-col justify-between gap-y-10 px-4 py-32 md:flex-row-reverse md:px-10'>
      {/* //section content */}
      <div className='space-y-10'>
        <div className='space-y-5'>
          <p className='font-ibmPlexSans text-lg font-semibold leading-7 text-orange-600'>
            Tableau de Bord
          </p>
          <h2 className='max-w-[635px]  font-ibmPlexSans text-3xl font-medium text-stone-900 md:text-[50px] md:leading-[59.92px]'>
            Débloquez des informations puissantes avec notre Tableau de Bord
          </h2>
          <p className='max-w-md font-ibmPlexSans text-lg font-normal leading-7 text-stone-900'>
            Découvrez les données comme jamais auparavant grâce à notre
            fonctionnalité de tableau de bord intuitive. Obtenez des
            informations en temps réel, suivez les principales statistiques et
            prenez des décisions basées sur les données sans effort. Que vous
            soyez un propriétaire d'entreprise, un marketeur ou un analyste,
            notre tableau de bord vous permet de visualiser et d'analyser vos
            données avec facilité.
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
              Explorer le Tableau de Bord
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
        src='https://ik.imagekit.io/zb5z1u26qn/LegalOne/div(1).framer-1xlsjqa?updatedAt=1697037103075'
        width={0}
        height={0}
        sizes='100vw'
      />
    </section>
  );
};

export default DashBoardSection;
