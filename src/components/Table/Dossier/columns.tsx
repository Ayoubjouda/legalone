'use client';
import * as React from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import DossierActions from './DossierActions';
import { format } from 'date-fns';
import { Dossier } from '@/types/order';
import { cn } from '@/lib/utils';
import Image from 'next/image';
enum DossierStatus {
  INPROGRESS = 'INPROGRESS',
  DONE = 'DONE',
  WAITINGFORPAYMENT = 'WAITINGFORPAYMENT',
  CANCELLED = 'CANCELLED',
}

export const columns: ColumnDef<Dossier>[] = [
  {
    accessorKey: 'formalityId',
    header: 'Dossier N°',
    cell: ({ row }) =>
      row?.getValue('formalityId') ? (
        <div className='lowercase'>{row?.getValue('formalityId')}</div>
      ) : null,
  },
  {
    accessorKey: 'dossier',
    header: 'Dossier',
    cell: ({ row }) => (
      <div className='text-sm  '>{row.getValue('dossier')}</div>
    ),
  },
  {
    accessorKey: 'client',
    header: 'client',
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
    accessorKey: 'companyName',
    header: 'Nom de la société',
    accessorFn: (dossier) => dossier.data.companyName,
    cell: ({ row }) => (
      <div className='text-sm'>{row.getValue('companyName')}</div>
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
                row.getValue('status') === DossierStatus.CANCELLED,
              'bg-emerald-100 text-green-600':
                row.getValue('status') === DossierStatus.DONE,
              'bg-orange-100 text-orange-500':
                row.getValue('status') === DossierStatus.INPROGRESS,
              'bg-gray-100 text-gray-500':
                row.getValue('status') === DossierStatus.WAITINGFORPAYMENT,
            })}
          >
            <div className='flex items-center gap-2'>
              <p
                className={cn('h-2 w-2 rounded-full bg-red-400', {
                  ' bg-red-500':
                    row.getValue('status') === DossierStatus.CANCELLED,
                  ' bg-green-600':
                    row.getValue('status') === DossierStatus.DONE,
                  ' bg-orange-500':
                    row.getValue('status') === DossierStatus.INPROGRESS,
                  'bg-gray-500':
                    row.getValue('status') === DossierStatus.WAITINGFORPAYMENT,
                })}
              ></p>
              <p className=''>{row.getValue('status')}</p>
            </div>
          </Badge>
        </div>
      ) : null,
  },

  // {
  //   accessorKey: 'createdAt',
  //   header: 'Créé le',
  //   cell: ({ row }) => (
  //     <div className='text-sm  '>
  //       {format(new Date(row.getValue('createdAt')), 'PPp')}
  //     </div>
  //   ),
  // },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const dossier = row.original;
      return <DossierActions dossier={dossier} />;
    },
  },
];
