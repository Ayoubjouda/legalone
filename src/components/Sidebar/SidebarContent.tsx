import React from 'react';

import SidebarSubmenu from './SidebarSubmenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconProps } from '../Icon';
import Icon from '../Icon';

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
  return (
    <div className='max-w-full py-4 '>
      <div className='relative   inline-block pl-6'>
        <span>Legal</span>
        <b>Centre</b>
      </div>
      <ul className='mt-6 flex flex-col'>
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
              className={` relative  mr-2 flex items-center rounded-r-md px-6 py-4 text-lg font-semibold ${
                pathname === route.routes.name
                  ? 'bg-gray-100 text-gray-800 dark:text-gray-100'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {pathname === route.routes.name && (
                <span
                  className='absolute inset-y-0 left-0 w-1 rounded-br-lg rounded-tr-lg bg-redish'
                  aria-hidden='true'
                ></span>
              )}
              <Icon name={route.icon} />
              <span className='ml-4'>{route.name}</span>
            </Link>
          );

          // }
        })}
      </ul>
      <div className='my-6 px-6'></div>
    </div>
  );
}

export default SidebarContent;
