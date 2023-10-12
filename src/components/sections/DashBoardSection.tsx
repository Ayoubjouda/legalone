import { FC } from 'react';
import Image from 'next/image';

interface DashBoardSectionProps {}

const DashBoardSection: FC<DashBoardSectionProps> = () => {
  return (
    <section className="flex  w-full max-w-screen-xl justify-between gap-y-10 h-fit px-10 flex-col md:flex-row-reverse py-32">
      {/* //section content */}
      <div className="space-y-10">
        <div className="space-y-5">
          <p className="text-orange-600 text-lg font-semibold font-ibmPlexSans leading-7">
            Tableau de Bord
          </p>
          <h2 className="max-w-[635px]  text-stone-900 text-3xl md:text-[50px] font-medium font-ibmPlexSans md:leading-[59.92px]">
            Débloquez des informations puissantes avec notre Tableau de Bord
          </h2>
          <p className="text-stone-900 text-lg font-normal font-ibmPlexSans leading-7 max-w-md">
            Découvrez les données comme jamais auparavant grâce à notre
            fonctionnalité de tableau de bord intuitive. Obtenez des
            informations en temps réel, suivez les principales statistiques et
            prenez des décisions basées sur les données sans effort. Que vous
            soyez un propriétaire d'entreprise, un marketeur ou un analyste,
            notre tableau de bord vous permet de visualiser et d'analyser vos
            données avec facilité.
          </p>
        </div>
        <div className="space-y-10">
          <div className="flex gap-5">
            <div className="flex gap-2">
              <Image
                src={'./checkMark.svg'}
                alt=""
                height={20}
                width={20}
              />
              <p className="text-center text-stone-900 text-base font-medium font-ibmPlexSans leading-normal">
                Réduction des coûts
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src={'./checkMark.svg'}
                alt=""
                height={20}
                width={20}
              />
              <p className="text-center text-stone-900 text-base font-medium font-ibmPlexSans leading-normal">
                Réduction des coûts
              </p>
            </div>
          </div>
          <p className="h-[1px] bg-gray-200 w-full "></p>
          <div className="flex ">
            <div className="text-orange-600 text-base font-semibold font-ibmPlexSans leading-normal">
              Explorer le Tableau de Bord
            </div>
            <Image
              src={''}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* //section Image */}
      <Image
        alt=""
        className="object-fill  max-w-lg max-h-[660px] h-full w-full"
        src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/div(1).framer-1xlsjqa?updatedAt=1697037103075"
        width={0}
        height={0}
        sizes="100vw"
      />
    </section>
  );
};

export default DashBoardSection;
