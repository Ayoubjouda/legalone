import { FC } from 'react';
import Image from 'next/image';
interface FeaturesSectionProps {}

const FeaturesSection: FC<FeaturesSectionProps> = () => {
  return (
    <section className="flex w-full max-w-screen-xl justify-between gap-y-10 h-fit px-10 flex-col md:flex-row">
      {/* //section content */}
      <div className="space-y-10">
        <div className="space-y-5">
          <p className="text-orange-600 text-lg font-semibold font-ibmPlexSans leading-7">
            The best StartUp in town
          </p>
          <h2 className="max-w-[635px]  text-stone-900 text-3xl md:text-[50px] font-medium font-['IBM Plex Sans'] md:leading-[59.92px]">
            Établissez Votre Entreprise Sans Complications Administratives !
          </h2>
          <p className="text-stone-900 text-lg font-normal font-ibmPlexSans leading-7 max-w-md">
            Notre application vous permet de créer votre entreprise en un clin
            d'œil, en vous déchargeant de toutes les formalités administratives
            fastidieuses. Vous pouvez ainsi vous concentrer sur le cœur de votre
            entreprise, sans vous soucier des tracas administratifs
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
              Lancer Vous
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
        src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/div.framer-9f706l.png?updatedAt=1697035012834"
        width={0}
        height={0}
        sizes="100vw"
      />
    </section>
  );
};

export default FeaturesSection;
