'use client';
import { User } from '@nextui-org/react';
import { signOut } from 'next-auth/react';
import type { Session } from 'next-auth';
import { LogOut } from 'lucide-react';

interface UserNavProps {
  session: Session | null;
}

export function UserNav({ session }: UserNavProps) {
  return (
    <div className='flex items-center gap-4 overflow-hidden rounded-md bg-white px-3 py-3'>
      <User
        as='button'
        avatarProps={{
          isBordered: true,
          radius: 'sm',
          src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        }}
        classNames={{
          description: 'text-gray-500',
          name: 'font-semibold',
        }}
        className='transition-transform '
        description={session?.user?.email}
        name={`${session?.user?.firstName} ${session?.user?.lastName}`}
      />
      <div onClick={() => signOut()}>
        <LogOut className='cursor-pointer' />
      </div>
    </div>
  );
}
