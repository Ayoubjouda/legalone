'use client';
import { FC } from 'react';

interface NavBarProps {}

import { ChevronRight } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import MobileSidebar from './Sidebar/MobileSidebar';
import { UserNav } from './user-nav';
const DashBoardNavbar: FC<NavBarProps> = () => {
  const pathName = usePathname();
  const pathArray = pathName.slice(1).split('/');
  const formattedPathArray = pathArray.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const { data: session, status } = useSession();
  return (
    <div className='sticky inset-0 z-10 flex w-full items-center justify-between border-b bg-white px-4 py-2 '>
      <div className='flex gap-3'>
        <MobileSidebar />

        <div className='flex'>
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
      </div>

      <div>
        {status === 'authenticated' ? <UserNav session={session} /> : null}
        {/* <Button
          className='bg-black text-white  hover:bg-black'
          size='sm'
        >
          <Cog
            size={16}
            className='mr-2'
          />
          Settings
        </Button> */}
      </div>
    </div>
  );
};

export default DashBoardNavbar;
