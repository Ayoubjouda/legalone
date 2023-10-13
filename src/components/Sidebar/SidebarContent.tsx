import React from 'react';
// import routes from '../../routes/sidebar';
// import { NavLink, Route } from 'react-router-dom';
// import * as Icons from '../../icons';
import SidebarSubmenu from './SidebarSubmenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// function Icon({ icon, ...props }) {
//   const Icon = Icons[icon];
//   return <Icon {...props} />;
// }

const routes = [
  { name: 'DashBoard', routes: { name: '/dashboard' } },
  { name: 'Users', routes: { name: '/dashboard/users' } },
  { name: 'Services', routes: { name: '/dashboard/services' } },
  { name: 'Orders', routes: { name: '/dashboard/orders' } },
  { name: 'Payments', routes: { name: '/dashboard/payments' } },
];

function SidebarContent() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="py-4 text-gray-500 max-w-full dark:text-gray-400">
      <ul className="mt-6 flex flex-col">
        {routes.map((route, index) =>
          !route.routes ? (
            <SidebarSubmenu
              route={route}
              key={route.name}
            />
          ) : (
            <Link
              href={route.routes.name}
              key={route.name}
              className={` items-center  px-6 py-4 relative  text-lg font-semibold ${
                pathname === route.routes.name
                  ? 'bg-redish text-white rounded-xl mx-3'
                  : ''
              } hover:text-gray-800 dark:hover:text-gray-200`}
              // activeClassName="text-gray-800 dark:text-gray-100"
            >
              {/* {index === 0 && (
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-redish rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )} */}
              {/* <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon}
                /> */}
              <span className="ml-4">{route.name}</span>
            </Link>
          )
        )}
      </ul>
      <div className="px-6 my-6"></div>
    </div>
  );
}

export default SidebarContent;
