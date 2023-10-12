import { FC } from 'react';
import Image from 'next/image';
interface SponsorsSectionProps {}

const SponsorsSection: FC<SponsorsSectionProps> = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-32 bg-white flex-col justify-center items-center ">
      <div className=" flex-col justify-center items-center gap-12 flex">
        <div className="text-slate-500 text-xl font-normal font-['Be Vietnam Pro'] leading-[27px]">
          Already chosen by the world leaders
        </div>
        <div className="flex justify-between flex-col md:flex-row items-center gap-8  w-full">
          <Image
            className=" w-32   md:w-24  lg:w-32  object-contain "
            alt=""
            src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg79002381_8468.png?updatedAt=1694943387954"
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image
            className=" object-contain  w-32   md:w-24  lg:w-32 "
            alt=""
            src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-1305855712_3249.png?updatedAt=1694943387877"
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image
            className=" object-contain  w-32   md:w-24  lg:w-32 "
            alt=""
            src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-1422926009_3286.png?updatedAt=1694943387875"
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image
            className="object-contain  w-32   md:w-24  lg:w-32 "
            alt=""
            src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-1490657353_1089.png?updatedAt=1694943387904"
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image
            className=" object-contain  w-32   md:w-24  lg:w-32 "
            alt=""
            src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-2143453188_4259.png?updatedAt=1694943387902"
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image
            className=" object-contain  w-32   md:w-24  lg:w-32 "
            alt=""
            src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-936861110_4209.png?updatedAt=1694943387925"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
