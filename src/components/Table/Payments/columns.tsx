'use client';
import * as React from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import PaymentActions from './PaymentActions';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
export enum Status {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}
export const columns: ColumnDef<Payment>[] = [
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
    header: 'Client',
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className='lowercase'>
          <div className='flex items-center gap-4'>
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
    accessorKey: 'amount',
    header: 'Montant',
    cell: ({ row }) => (
      <div className='capitalize'>{`${row.getValue('amount')} `}</div>
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
                row.getValue('status') === Status.CANCELLED,
              'bg-emerald-100 text-green-600':
                row.getValue('status') === Status.COMPLETED,
              'bg-orange-100 text-orange-500':
                row.getValue('status') === Status.PENDING,
            })}
          >
            <div className='flex items-center gap-2'>
              <p
                className={cn('h-2 w-2 rounded-full bg-red-400', {
                  ' bg-red-500': row.getValue('status') === Status.CANCELLED,
                  ' bg-green-600': row.getValue('status') === Status.COMPLETED,
                  ' bg-orange-500': row.getValue('status') === Status.PENDING,
                })}
              ></p>
              <p className=''>{row.getValue('status')}</p>
            </div>
          </Badge>
        </div>
      ) : null,
  },
  {
    accessorKey: 'order',
    accessorFn: (payment) => payment.order.id,
    header: 'Numéro de commande',
    cell: ({ row }) => <p>{row.getValue('order')}</p>,
  },

  {
    accessorKey: 'createdAt',
    header: 'Date de création',
    cell: ({ row }) => (
      <p>{format(new Date(row.getValue('createdAt')), 'PPpp')}</p>
    ),
  },
  {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return <PaymentActions payment={payment} />;
    },
  },
];
