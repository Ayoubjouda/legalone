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
  { name: 'DashBoard', icon: 'home', routes: { name: '/dashboard' } },
  { name: 'Users', icon: 'users', routes: { name: '/dashboard/users' } },
  {
    name: 'Services',
    icon: 'folder',
    routes: { name: '/dashboard/services' },
  },
  {
    name: 'Orders',
    icon: 'shopping-cart',
    routes: { name: '/dashboard/orders' },
  },
  {
    name: 'Payments',
    icon: 'badge-dollar-sign',
    routes: { name: '/dashboard/payments' },
  },
];

function SidebarContent() {
  const pathname = usePathname();
  return (
    <div className="py-4 text-gray-500 max-w-full dark:text-gray-400">
      <ul className="mt-6 flex flex-col">
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
              className={` items-center  px-6 py-4 mr-2 rounded-r-md relative flex text-lg font-semibold ${
                pathname === route.routes.name
                  ? 'text-gray-800 bg-gray-100 dark:text-gray-100'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {pathname === route.routes.name && (
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-redish rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )}
              <Icon name={route.icon} />
              <span className="ml-4">{route.name}</span>
            </Link>
          );

          // }
        })}
      </ul>
      <div className="px-6 my-6"></div>
    </div>
  );
}

export default SidebarContent;
