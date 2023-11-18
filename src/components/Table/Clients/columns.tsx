'use client';
import * as React from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ClientActions from './ClientActions';
import { cn } from '@/lib/utils';
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
    cell: ({ row }) => <div className='lowercase'>{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'firstName',
    accessorFn: (user) => `${user.firstName} ${user.lastName}`,
    enableGrouping: true,
    header: 'Name',
    cell: ({ row }) => (
      <div className='capitalize'>{`${row.getValue('firstName')} `}</div>
    ),
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
