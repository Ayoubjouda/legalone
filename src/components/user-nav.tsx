'use client';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from '@nextui-org/react';
import { signOut } from 'next-auth/react';
import type { Session } from 'next-auth';

interface UserNavProps {
  session: Session | null;
}
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

export function UserNav({ session }: UserNavProps) {
  return (
    <div className='flex items-center gap-4'>
      <Dropdown placement='bottom-start'>
        <DropdownTrigger>
          <User
            as='button'
            avatarProps={{
              isBordered: true,
              src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            }}
            isFocusable
            className='flex-row-reverse transition-transform '
            description={session?.user?.email}
            name={`${session?.user?.firstName} ${session?.user?.lastName}`}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label='User Actions'
          variant='flat'
        >
          <DropdownItem
            key='profile'
            className='h-14 gap-2'
          >
            <p className='font-bold'>Signed in as</p>
            <p className='font-bold'>{`${session?.user?.firstName}`} </p>
          </DropdownItem>
          <DropdownItem key='settings'>My Settings</DropdownItem>
          <DropdownItem key='team_settings'>Team Settings</DropdownItem>
          <DropdownItem key='analytics'>Analytics</DropdownItem>
          <DropdownItem key='system'>System</DropdownItem>
          <DropdownItem key='configurations'>Configurations</DropdownItem>
          <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
          <DropdownItem
            key='logout'
            color='danger'
            onClick={() => signOut()}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
