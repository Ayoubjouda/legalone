'use client';
import { FC } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Icons } from './Icons';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;

  links: Links[];
}
interface ServicesContentProps {
  Links: Links[];
}
interface Links {
  id: number;
  title: string;
  url: string;
}

const ServicesContent = ({ Links }: ServicesContentProps) => {
  return (
    <div className=' md:flex-start flex w-full min-w-[220px] flex-col flex-wrap md:max-h-[220px] md:max-w-md md:flex-col'>
      {Links.length > 0
        ? Links?.map((link: Links, idx: number) => (
            <Link
              key={idx}
              href={link.url}
              className='  min-w-[150px] rounded p-2  text-start text-sm font-semibold hover:bg-slate-100'
            >
              {link.title}
            </Link>
          ))
        : null}
    </div>
  );
};

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  links,
  description,
  icon,
}: ServiceCardProps) => {
  const router = useRouter();
  const Icon = Icons[icon || 'arrowRight'];
  return (
    <div>
      <div className='hidden md:flex'>
        <HoverCard openDelay={100}>
          <HoverCardTrigger>
            <div
              className='box-border flex cursor-pointer items-center  justify-center gap-4 overflow-hidden rounded-md border-[1px] border-solid bg-white px-4 py-3 hover:border-redish'
              onClick={() => router.push('/createcompany')}
            >
              <Icon
                size={26}
                className='stroke-redish'
              />

              <div className='flex w-full flex-col'>
                <div className='flex flex-row '>
                  <b className='relative inline-block  shrink-0'>{title}</b>
                </div>
                <div className='w-full text-start '>
                  <p className='max-w-[160px] truncate font-ibmPlexSans text-xs font-normal'>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent
            side='top'
            className='w-full max-w-md'
          >
            <ServicesContent Links={links} />
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className='md:hidden'>
        <Popover>
          <PopoverTrigger asChild>
            <div className='box-border flex cursor-pointer   items-center justify-center gap-[7px] overflow-hidden rounded-md border-[1px] border-solid bg-white px-[18px] py-2.5 hover:border-sandybrown-100'>
              <Icon size={26} />

              <div className='flex w-full flex-col'>
                <div className='flex flex-row '>
                  <b className='relative inline-block  shrink-0'>{title}</b>
                </div>
                <div className='w-full text-start '>
                  <p className='max-w-[160px] truncate font-ibmPlexSans text-xs font-normal'>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className='w-full max-w-md'
            side='top'
          >
            <ServicesContent Links={links} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ServiceCard;
