'use client';
import { FC } from 'react';
import { UserNav } from './user-nav';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

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
import Sidebar from './Sidebar';

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

const DashBoardNavbar: FC<NavBarProps> = () => {
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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline'>Open</Button>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <Sidebar />
            {/* <SheetFooter>
              <SheetClose asChild>
                <Button type='submit'>Save changes</Button>
              </SheetClose>
            </SheetFooter> */}
          </SheetContent>
        </Sheet>
      </NavbarContent>

      <NavbarContent justify='end'>
        {status === 'authenticated' ? (
          <UserNav session={session} />
        ) : (
          <>
            <NavbarItem className='hidden lg:flex '>
              <Link
                href={'/'}
                color='foreground'
                className=' relative   rounded-md  hover:text-redish'
              >
                Accueil
              </Link>
            </NavbarItem>
            <NavbarItem className='hidden lg:flex '>
              <Link
                href={'tarifs'}
                color='foreground'
                className=' relative   rounded-md  hover:text-redish'
              >
                Tarifs
              </Link>
            </NavbarItem>

            <NavbarItem className='hidden lg:flex '>
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
          </>
        )}
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

export default DashBoardNavbar;
