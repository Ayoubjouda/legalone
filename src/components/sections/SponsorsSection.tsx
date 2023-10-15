import { FC } from 'react';
import Image from 'next/image';
interface SponsorsSectionProps {}

const SponsorsSection: FC<SponsorsSectionProps> = () => {
  return (
    <section className='w-full flex-col items-center justify-center bg-white px-4 md:px-8 lg:px-32 '>
      <div className=' flex flex-col items-center justify-center gap-12'>
        <div className="font-['Be Vietnam Pro'] text-xl font-normal leading-[27px] text-slate-500">
          Already chosen by the world leaders
        </div>
        <div className='flex w-full flex-col items-center justify-between gap-8  md:flex-row'>
          <Image
            className=' w-32   object-contain  md:w-24  lg:w-32 '
            alt=''
            src='https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg79002381_8468.png?updatedAt=1694943387954'
            width={0}
            height={0}
            sizes='100vw'
          />
          <Image
            className=' w-32  object-contain   md:w-24  lg:w-32 '
            alt=''
            src='https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-1305855712_3249.png?updatedAt=1694943387877'
            width={0}
            height={0}
            sizes='100vw'
          />
          <Image
            className=' w-32  object-contain   md:w-24  lg:w-32 '
            alt=''
            src='https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-1422926009_3286.png?updatedAt=1694943387875'
            width={0}
            height={0}
            sizes='100vw'
          />
          <Image
            className='w-32  object-contain   md:w-24  lg:w-32 '
            alt=''
            src='https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-1490657353_1089.png?updatedAt=1694943387904'
            width={0}
            height={0}
            sizes='100vw'
          />
          <Image
            className=' w-32  object-contain   md:w-24  lg:w-32 '
            alt=''
            src='https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-2143453188_4259.png?updatedAt=1694943387902'
            width={0}
            height={0}
            sizes='100vw'
          />
          <Image
            className=' w-32  object-contain   md:w-24  lg:w-32 '
            alt=''
            src='https://ik.imagekit.io/zb5z1u26qn/LegalOne/svg-936861110_4209.png?updatedAt=1694943387925'
            width={0}
            height={0}
            sizes='100vw'
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
