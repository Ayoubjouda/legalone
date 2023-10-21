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
import { Menu } from 'lucide-react';

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
      maxWidth='xl'
      classNames={{
        wrapper: 'bg-gray-50 mx-3',
      }}
    >
      <NavbarContent
        className='lg:hidden'
        justify='start'
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='link'
              className=' px-0'
            >
              <Menu
                size={32}
                color='black'
              />
            </Button>
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
    </Navbar>
  );
};

export default DashBoardNavbar;
