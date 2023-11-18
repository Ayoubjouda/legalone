'use client';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Dossier } from '@/types/order';
import { ColumnDef } from '@tanstack/react-table';
import DossierActions from './DossierActions';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import Link from 'next/link';
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

  {
    accessorKey: 'createdAt',
    header: 'Créé le',
    cell: ({ row }) => (
      <div className='text-sm  '>
        {format(new Date(row.getValue('createdAt')), 'PPp')}
      </div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const FormalityId = row.getValue('formalityId');
      return (
        <Link href={`/packages?formality=${FormalityId}`}>
          <Button className='border bg-white text-black '>Finaliser</Button>
        </Link>
      );
    },
  },
];
