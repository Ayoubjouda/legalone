import React from 'react';
// import routes from '../../routes/sidebar';
// import { NavLink, Route } from 'react-router-dom';
// import * as Icons from '../../icons';
import SidebarSubmenu from './SidebarSubmenu';
import Link from 'next/link';

// function Icon({ icon, ...props }) {
//   const Icon = Icons[icon];
//   return <Icon {...props} />;
// }

const routes = [
  { name: 'DashBoard', routes: { name: 'eee' } },
  { name: 'Users', routes: { name: 'eee' } },
  { name: 'Services', routes: { name: 'eee' } },
  { name: 'Orders', routes: { name: 'eee' } },
  { name: 'Payments', routes: { name: 'eee' } },
];

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <ul className="mt-6">
        {routes.map((route, index) =>
          !route.routes ? (
            <SidebarSubmenu
              route={route}
              key={route.name}
            />
          ) : (
            <li
              className="relative px-6 py-3"
              key={route.name}
            >
              <Link
                href={'name'}
                className="inline-flex items-center w-full text-lg font-semibold transition-colors duration-150 ${} hover:text-gray-800 dark:hover:text-gray-200"
                // activeClassName="text-gray-800 dark:text-gray-100"
              >
                {index === 0 && (
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-redish rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                )}
                {/* <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon}
                /> */}
                <span className="ml-4">{route.name}</span>
              </Link>
            </li>
          )
        )}
      </ul>
      <div className="px-6 my-6"></div>
    </div>
  );
}

export default SidebarContent;
