'use client';
import * as React from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import DossierActions from './DossierActions';

export const columns: ColumnDef<FormalitiesResponse>[] = [
  {
    accessorKey: 'dossier',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Dossier
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('dossier')}</div>
    ),
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) =>
      row.getValue('status') ? (
        <div>
          <Badge variant='secondary'> {row.getValue('status')}</Badge>
        </div>
      ) : null,
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => (
      <div className='text-sm font-semibold capitalize'>
        {row.getValue('type')}
      </div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const dossier = row.original;
      return <DossierActions dossier={dossier} />;
    },
  },
];
