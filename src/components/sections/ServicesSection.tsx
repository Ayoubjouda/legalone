'use client';
import Image from 'next/image';
import { FC } from 'react';
import ServiceBox from '../serviceBox';
import { CREATE_SERVICE } from '@/lib/constants';
import { notFound, useSearchParams } from 'next/navigation';
interface ServicesSectionProps {
  title: string;
  description: string;
  question: string;
  services?: string[];
}

const ServicesSection: FC<ServicesSectionProps> = ({
  title,
  description,
  question,
  services,
}) => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || notFound();

  return (
    <section className=' z-[7] mx-4 mt-8 flex flex-col items-center  justify-start  gap-[45px] self-stretch bg-white text-center text-base md:gap-12'>
      {/* Content */}
      <div className='flex max-w-screen-xl flex-row '>
        <div className='flex w-full flex-col gap-y-5 text-start lg:w-1/2'>
          <p className='font-ibmPlexSans text-6xl font-medium leading-[70px] text-stone-900'>
            {title}
          </p>
          <p className='font-ibmPlexSans text-xl font-normal leading-[30px] text-stone-900'>
            {description}
          </p>
          <p className='font-ibmPlexSans text-xl font-medium leading-[30px] text-black'>
            {question}
          </p>
          <div className='flex w-full max-w-3xl flex-wrap gap-2'>
            {CREATE_SERVICE
              ? CREATE_SERVICE.map((item) => (
                  <ServiceBox
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    link={`/create?${type}`}
                  />
                ))
              : null}
          </div>
        </div>
        {/* Image */}
        <div className='hidden lg:block lg:w-1/2'>
          <Image
            alt='servicesImage'
            src='/serviceImage.png'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full'
            loading='eager'
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
