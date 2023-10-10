'use client';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { DropdownIcon } from '../../icons';
// import * as Icons from '../../icons';

// function Icon({ icon, ...props }) {
//   const Icon = Icons[icon];
//   return <Icon {...props} />;
// }

function SidebarSubmenu({ route }) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  return (
    <li
      className="relative px-6 py-3"
      key={route.name}
    >
      <button
        className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
        onClick={handleDropdownMenuClick}
        aria-haspopup="true"
      >
        {/* <span className="inline-flex items-center"> */}
        {/* <Icon
            className="w-5 h-5"
            aria-hidden="true"
            icon={route.icon}
          />
          <span className="ml-4">{route.name}</span>
        </span>
        <DropdownIcon
          className="w-4 h-4"
          aria-hidden="true"
        /> */}
      </button>
      <div>
        <ul
          className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
          aria-label="submenu"
        >
          {/* {route.routes.map((r) => (
            <li
              className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              key={r.name}
            >
              <Link
                className="w-full"
                to={r.path}
              >
                {r.name}
              </Link>
            </li>
          ))} */}
        </ul>
      </div>
    </li>
  );
}

export default SidebarSubmenu;
