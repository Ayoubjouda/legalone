'use client';
import { FC } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface ServiceCardProps {
  title: string;
  image: string;
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
    <div className="max-w-md w-full flex flex-wrap">
      {Links.length > 0
        ? Links?.map((link: Links, idx: number) => (
            <Link
              key={idx}
              href={link.url}
              className="w-1/2 text-sm font-semibold hover:bg-slate-100 p-2 rounded text-start"
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
  image,
  links,
}: ServiceCardProps) => {
  const router = useRouter();
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger>
        <div
          className="hover:border-sandybrown-100 box-border flex h-[88px] flex-col items-center justify-center gap-[7px] overflow-hidden rounded-md border-[1px] border-solid bg-white px-[18px] py-2.5 cursor-pointer"
          onClick={() => router.push('/createcompany')}
        >
          <Image
            className="relative h-[30px] w-[30px] shrink-0 overflow-hidden"
            alt=""
            src="/icons8company-1.svg"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <b className="relative inline-block w-[200px] shrink-0">
                {title}
              </b>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        className="max-w-md w-full"
      >
        <ServicesContent Links={links} />
      </HoverCardContent>
    </HoverCard>
  );
};

export default ServiceCard;
