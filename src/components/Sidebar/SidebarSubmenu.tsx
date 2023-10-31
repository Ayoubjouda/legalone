'use client';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Icons } from '../Icons';

interface SidebarSubmenuProps {
  name: string;
  icon: keyof typeof Icons;
  route: {
    name: string;
    route: string;
  }[];
}

function SidebarSubmenu({ route, icon, name }: SidebarSubmenuProps) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const pathname = usePathname();

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }
  const Icon = Icons[icon || 'arrowRight'];
  return (
    <>
      <div
        className={` relative  flex cursor-pointer items-center  rounded-md px-2 py-2 font-semibold text-white`}
        onClick={handleDropdownMenuClick}
      >
        <Icon size={16} />
        <span className='ml-4 text-base'>{name}</span>
        <ChevronDown className='ml-auto' />
      </div>
      <li
        className={cn(
          'relative max-h-0 overflow-hidden transition-all duration-300 ease-in-out',
          {
            'max-h-none  duration-300': isDropdownMenuOpen,
          }
        )}
      >
        {route.map((rout) => (
          <Link
            href={rout.route}
            key={rout.name}
            className={` relative   flex items-center rounded-md px-2 py-2 font-semibold  ${
              pathname === rout.route
                ? 'bg-gray-100 text-gray-800 dark:text-gray-100'
                : 'text-white hover:bg-gray-50/30 hover:text-white dark:text-gray-400'
            }`}
          >
            <span className='ml-4 text-base'>{rout.name}</span>
          </Link>
        ))}
      </li>
    </>
  );
}

export default SidebarSubmenu;
