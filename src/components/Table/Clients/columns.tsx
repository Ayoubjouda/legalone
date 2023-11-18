'use client';
import * as React from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ClientActions from './ClientActions';
import { cn } from '@/lib/utils';
import Image from 'next/image';
enum UserStatus {
  BANNED = 'BANNED',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
}
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'email',

    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className='lowercase'>
          <div className='flex items-center gap-4'>
            <Image
              className='h-10 w-10 rounded-full'
              src={`https://i.pravatar.cc/300?img={${Math.random()}}`}
              alt=''
              height={24}
              width={24}
            />
            <div className='font-medium dark:text-white'>
              <div> {user.email}</div>
              <div className='text-sm text-gray-500 dark:text-gray-400'>
                {user.firstName} {user.lastName}
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) =>
      row.getValue('status') ? (
        <div>
          <Badge
            variant='secondary'
            className={cn({
              'bg-red-100 text-red-500':
                row.getValue('status') === UserStatus.BANNED,
              'bg-emerald-100 text-green-600':
                row.getValue('status') === UserStatus.ACTIVE,
              'bg-orange-100 text-orange-500':
                row.getValue('status') === UserStatus.SUSPENDED,
            })}
          >
            <div className='flex items-center gap-2'>
              <p
                className={cn('h-2 w-2 rounded-full bg-red-400', {
                  ' bg-red-500': row.getValue('status') === UserStatus.BANNED,
                  ' bg-green-600': row.getValue('status') === UserStatus.ACTIVE,
                  ' bg-orange-500':
                    row.getValue('status') === UserStatus.SUSPENDED,
                })}
              ></p>
              <p className=''>{row.getValue('status')}</p>
            </div>
          </Badge>
        </div>
      ) : null,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => (
      <div className='text-sm font-semibold capitalize'>
        {row.getValue('role')}
      </div>
    ),
  },
  {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;
      return <ClientActions user={user} />;
    },
  },
];
