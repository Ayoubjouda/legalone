'use client';
import { FC } from 'react';

interface NavBarProps {}

import { ChevronRight, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

const DashBoardNavbar: FC<NavBarProps> = () => {
  const pathName = usePathname();
  const pathArray = pathName.slice(1).split('/');
  const formattedPathArray = pathArray.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return (
    <div className='flex items-center border-b px-4 py-2 '>
      {formattedPathArray.map((item, index) => (
        <div
          key={item}
          className='flex items-center gap-x-0'
        >
          <p className='font-semibold'>{item}</p>
          {index !== formattedPathArray.length - 1 ? (
            <div className='ml-2'>
              <ChevronRight
                size={20}
                className='py-0'
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default DashBoardNavbar;
