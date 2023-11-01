'use client';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '@nextui-org/react';
import { signOut } from 'next-auth/react';
import type { Session } from 'next-auth';
import Link from 'next/link';

interface UserNavProps {
  session: Session | null;
}

export function UserNav({ session }: UserNavProps) {
  return (
    <div className='flex items-center gap-4 overflow-hidden rounded-md bg-white px-3 py-1'>
      <Dropdown placement='bottom-start'>
        <DropdownTrigger>
          <User
            as='button'
            avatarProps={{
              isBordered: true,
              size: 'sm',
              src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            }}
            className='transition-transform'
            description=''
            name=''
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
            <p className='font-bold'>@{session?.user.lastName}</p>
          </DropdownItem>

          <DropdownItem key='settings'>
            <Link href='settings'>My Settings</Link>
          </DropdownItem>

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
