'use client';
import { FC } from 'react';
import Link from 'next/link';
interface NavBarProps {}

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from '@nextui-org/react';
import { Button } from './ui/button';

const menuItems = [
  'Profile',
  'Dashboard',
  'Activity',
  'Analytics',
  'System',
  'Deployments',
  'My Settings',
  'Team Settings',
  'Help & Feedback',
  'Log Out',
];

const NavBarClean: FC<NavBarProps> = () => {
  return (
    <Navbar
      shouldHideOnScroll
      maxWidth='xl'
    >
      <NavbarContent
        className='pr-3 lg:hidden'
        justify='center'
      >
        <NavbarBrand>
          <Link
            href={'/'}
            className='relative inline-block '
          >
            <span>Legal</span>
            <b>Centre</b>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className='hidden pr-3 lg:flex'
        justify='start'
      >
        <NavbarBrand>
          <Link
            href={'/'}
            className='relative inline-block w-[129.82px]'
          >
            <span>Legal</span>
            <b>Centre</b>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify='end'
        className='hidden lg:flex'
      >
        <NavbarItem>
          <Button className=' hover:bg- relative rounded-md bg-redish px-3 py-2 font-semibold text-white'>
            33 09577584
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href='#'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
};

export default NavBarClean;
