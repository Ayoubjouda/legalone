'use client';
import * as React from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import PaymentActions from './PaymentActions';
import { cn } from '@/lib/utils';
import { Order } from '@/types/order';
import { format } from 'date-fns';
export enum OrderStatus {
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
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => (
      <div className='capitalize'>{`${row.getValue('description')} `}</div>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Date de création',
    cell: ({ row }) => (
      <p>{format(new Date(row.getValue('createdAt')), 'MM/dd/yyyy')}</p>
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
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return <PaymentActions payment={payment} />;
    },
  },
];
