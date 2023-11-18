'use client';
import * as React from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import OrderActions from './OrderActions';
import { cn } from '@/lib/utils';
import { Order } from '@/types/order';
import { format } from 'date-fns';
import Image from 'next/image';
export enum OrderStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}
export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Id
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div className='lowercase'>{row.getValue('id')}</div>,
  },

  {
    accessorKey: 'user',
    accessorFn: (order) => `${order.user.email}`,

    header: 'Client',
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
              <div> {user.user.email}</div>
              <div className='text-sm text-gray-500 dark:text-gray-400'>
                {user.user.firstName} {user.user.lastName}
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
                row.getValue('status') === OrderStatus.CANCELLED,
              'bg-emerald-100 text-green-600':
                row.getValue('status') === OrderStatus.COMPLETED,
              'bg-orange-100 text-orange-500':
                row.getValue('status') === OrderStatus.PENDING,
            })}
          >
            <div className='flex items-center gap-2'>
              <p
                className={cn('h-2 w-2 rounded-full bg-red-400', {
                  ' bg-red-500':
                    row.getValue('status') === OrderStatus.CANCELLED,
                  ' bg-green-600':
                    row.getValue('status') === OrderStatus.COMPLETED,
                  ' bg-orange-500':
                    row.getValue('status') === OrderStatus.PENDING,
                })}
              ></p>
              <p className=''>{row.getValue('status')}</p>
            </div>
          </Badge>
        </div>
      ) : null,
  },
  {
    accessorKey: 'dossier',
    header: 'Description',
    accessorFn: (order) => `${order?.formality?.dossier}`,

    cell: ({ row }) => <div>{`${row.getValue('dossier')} `}</div>,
  },
  {
    accessorKey: 'createdAt',
    header: 'Date de création',
    cell: ({ row }) => (
      <p className='text-xs'>
        {format(new Date(row.getValue('createdAt')), 'MM/dd/yyyy')}
      </p>
    ),
  },
  {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: ({ row }) => {
      const order = row.original;
      return <OrderActions order={order} />;
    },
  },
];
