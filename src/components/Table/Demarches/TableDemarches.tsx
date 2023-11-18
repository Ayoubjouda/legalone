'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import { columns } from './columns';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useGetCurrentUserFormality } from '@/hooks/useDossier';

interface TableDemarchesProps {}

const TableDemarches: FC<TableDemarchesProps> = () => {
  const { data: DossierData } = useGetCurrentUserFormality();

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={DossierData?.formalities}
        columns={columns}
      >
        <Link href='/create'>
          <Button
            variant='outline'
            className='bg-redish text-white hover:bg-redish hover:text-white '
            size={'sm'}
          >
            <Plus className='mr-2 h-4 w-4' /> Ajouter
          </Button>
        </Link>
      </DataTable>
    </div>
  );
};

export default TableDemarches;
