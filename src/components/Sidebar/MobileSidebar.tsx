import React from 'react';

import SidebarSubmenu from './SidebarSubmenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserNav } from '../user-nav';
import { useSession } from 'next-auth/react';
import { DashboardRoutes } from '@/config/dashboard';
import { Icons } from '@/components/Icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';
function MobileSidebar() {
  const pathname = usePathname();
  return (
    <div className='flex w-full items-center justify-between lg:hidden '>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={'ghost'}
            className='lg:hidden'
          >
            <Icons.menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          className='bg-black text-white'
          side={'left'}
        >
          <div className='flex h-full  flex-col justify-between px-3 py-4 '>
            <div>
              <div className='relative  inline-block  pl-6 text-white'>
                <span>Legal</span>
                <b>Centre</b>
              </div>
              <ul className='mt-6 flex flex-col gap-1'>
                {DashboardRoutes.map((route, index) => {
                  const Icon = Icons[route.icon || 'arrowRight'];

                  if (route?.routes.length > 0) {
                    return (
                      <>
                        <SidebarSubmenu
                          route={route.routes}
                          icon={route.icon}
                          name={route.name}
                          key={route.name}
                        />
                      </>
                    );
                  } else {
                    return (
                      <SheetClose
                        asChild
                        key={Math.random()}
                      >
                        <Link
                          href={route.route}
                          key={route.name}
                          className={` relative   flex items-center rounded-md px-2 py-2 font-semibold  ${
                            pathname === route.route
                              ? 'bg-gray-100 text-gray-800 dark:text-gray-100'
                              : 'text-white hover:bg-gray-50/30 hover:text-white dark:text-gray-400'
                          }`}
                        >
                          <Icon size={16} />
                          <span className='ml-4 text-base'>{route.name}</span>
                        </Link>
                      </SheetClose>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileSidebar;
