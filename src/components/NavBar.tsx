'use client';
import { FC } from 'react';
import { UserNav } from './user-nav';
import { useSession } from 'next-auth/react';

interface NavBarProps {}

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from '@nextui-org/react';

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

const NavBar: FC<NavBarProps> = () => {
  const { data: session, status } = useSession();

  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      maxWidth='xl'
    >
      <NavbarContent
        className='lg:hidden'
        justify='start'
      >
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent
        className='pr-3 lg:hidden'
        justify='center'
      >
        <NavbarBrand>
          <div className='relative inline-block '>
            <span>Legal</span>
            <b>Centre</b>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className='hidden pr-3 lg:flex'
        justify='start'
      >
        <NavbarBrand>
          <div className='relative inline-block w-[129.82px]'>
            <span>Legal</span>
            <b>Centre</b>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify='end'
        className='hidden lg:flex'
      >
        <NavbarItem>
          <Link
            href={'/'}
            color='foreground'
            className=' relative   rounded-md  hover:text-redish'
          >
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href={'tarifs'}
            color='foreground'
            className=' relative   rounded-md  hover:text-redish'
          >
            Tarifs
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href={'login'}
            color='foreground'
            className=' relative   rounded-md  hover:text-redish'
          >
            Connexion
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href={'signup'}
            className=' relative rounded-md bg-redish px-3 py-2 font-semibold text-white'
          >
            Lancez-vous
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        justify='end'
        className='lg:hidden'
      >
        <NavbarItem>
          <Link
            href={'login'}
            className=' relative rounded-md bg-redish px-3 py-2 font-semibold text-white'
          >
            Connexion
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
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
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
