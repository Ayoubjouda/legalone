import { FC } from 'react';
interface SponsorsSectionProps {}

const SponsorsSection: FC<SponsorsSectionProps> = () => {
  return (
    <section className=' w-full flex-col items-center justify-center bg-orange-100 px-4 py-20 md:px-8 lg:px-32'>
      <div className=' flex flex-col items-center justify-center gap-12'>
        {/* <div className="font-['Be Vietnam Pro'] text-xl font-normal leading-[27px] text-slate-500">
          Already chosen by the world leaders
        </div> */}
        <div className='flex w-full  max-w-screen-xl flex-wrap items-center justify-evenly gap-10'>
          <div className='flex flex-col items-center gap-1'>
            <img
              width='100'
              height='16'
              src='/GoogleLogo.svg'
              alt='star'
            />
            <div className='flex gap-1'>
              <img
                width='16'
                height='16'
                src='https://img.icons8.com/tiny-color/16/star.png'
                alt='star'
              />
              <img
                width='16'
                height='16'
                src='https://img.icons8.com/tiny-color/16/star.png'
                alt='star'
              />
              <img
                width='16'
                height='16'
                src='https://img.icons8.com/tiny-color/16/star.png'
                alt='star'
              />
              <img
                width='16'
                height='16'
                src='https://img.icons8.com/tiny-color/16/star.png'
                alt='star'
              />
              <img
                width='16'
                height='16'
                src='https://img.icons8.com/tiny-color/16/star.png'
                alt='star'
              />
            </div>
            <div>
              <p className='text-base'>
                <b>4,5/5</b> | <span className='underline'>7700 avis</span>
              </p>
            </div>
          </div>
          <div className='text-center text-2xl font-semibold'>
            Plus de <span className=' text-redish'>350 000 entrepreneur</span>
            <br /> accompagnés depuis 10 ans
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='flex items-end gap-2'>
              <img
                width={32}
                src='/Truststar.png'
                alt='star'
              />
              <p className='text-lg font-semibold'>TrustPilot</p>
            </div>
            <p className='text-lg font-bold'>4.7/5</p>
            <div className='flex gap-x-1'>
              <img
                width={32}
                src='/Star.png'
                alt='star'
              />
              <img
                width={32}
                src='/Star.png'
                alt='star'
              />
              <img
                width={32}
                src='/Star.png'
                alt='star'
              />
              <img
                width={32}
                src='/Star.png'
                alt='star'
              />
              <img
                width={32}
                src='/Star.png'
                alt='star'
              />
            </div>
            <p className='text-base text-gray-500'>sur 3509 avis Excellent </p>
          </div>
        </div>

        {/* <div className='flex w-full flex-col items-center justify-between gap-8  md:flex-row'>
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
        </div> */}
      </div>
    </section>
  );
};

export default SponsorsSection;
