import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { Icons } from './Icons';
interface serviceBoxProps {
  title: string;
  icon: keyof typeof Icons;
  link: string;
}

const ServiceBox: FC<serviceBoxProps> = ({ link, title, icon }) => {
  const Icon = Icons[icon];
  return (
    <Link
      href={link}
      className='border-darkgray-100 flex max-h-[104px] w-full max-w-[104px]  cursor-pointer flex-col  items-center justify-center gap-[10px] overflow-hidden rounded-2xl border-[1px] border-solid bg-white px-1 py-4 shadow-md transition-all duration-300 ease-in-out hover:border-orange-500'
    >
      <Icon
        size={32}
        className='h-8 w-8'
      />
      <div className='text-slategray-100 relative   text-center text-sm leading-4'>
        {title}
      </div>
    </Link>
  );
};

export default ServiceBox;
