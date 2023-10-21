import React from 'react';

import SidebarSubmenu from './SidebarSubmenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconProps } from '../Icon';
import Icon from '../Icon';
import { UserNav } from '../user-nav';
import { useSession } from 'next-auth/react';
type routes = {
  name: string;
  icon: IconProps['name'];
  routes: {
    name: string;
  };
}[];

const routes: routes = [
  { name: 'DashBoard', icon: 'Home', routes: { name: '/dashboard' } },
  { name: 'Users', icon: 'Users', routes: { name: '/dashboard/users' } },
  {
    name: 'Services',
    icon: 'Folder',
    routes: { name: '/dashboard/services' },
  },
  {
    name: 'Orders',
    icon: 'ShoppingCart',
    routes: { name: '/dashboard/orders' },
  },
  {
    name: 'Payments',
    icon: 'BadgeDollarSign',
    routes: { name: '/dashboard/payments' },
  },
];

function SidebarContent() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  return (
    <div className='flex h-full max-w-full flex-col justify-between px-3 py-4 '>
      <div>
        <div className='relative  inline-block  pl-6 text-white'>
          <span>Legal</span>
          <b>Centre</b>
        </div>
        <ul className='mt-6 flex flex-col gap-2'>
          {routes.map((route, index) => {
            // if (routes) {
            //   return (
            //     <SidebarSubmenu
            //       route={route}
            //       key={route.name}
            //     />
            //   );
            // } else {
            return (
              <Link
                href={route.routes.name}
                key={route.name}
                className={` relative   flex items-center rounded-md px-2 py-2 font-semibold  ${
                  pathname === route.routes.name
                    ? 'bg-gray-100 text-gray-800 dark:text-gray-100'
                    : 'text-white hover:bg-gray-50/30 hover:text-white dark:text-gray-400'
                }`}
              >
                {/* {pathname === route.routes.name && (
                <span
                  className='absolute inset-y-0 left-0 w-1 rounded-br-lg rounded-tr-lg bg-redish'
                  aria-hidden='true'
                ></span>
              )} */}
                <Icon
                  name={route.icon}
                  size={16}
                />
                <span className='ml-4 text-base'>{route.name}</span>
              </Link>
            );

            // }
          })}
        </ul>
      </div>

      {status === 'authenticated' ? <UserNav session={session} /> : null}
    </div>
  );
}

export default SidebarContent;
