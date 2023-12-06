'use client';
import { Button } from '@/components/ui/button';
import { useGetCurrentUserFormality } from '@/hooks/useDossier';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { DataTable } from '../data-table';
import { columns } from './columns';

interface TableDemarchesProps {}

const TableDemarches: FC<TableDemarchesProps> = () => {
  const getParams = useSearchParams();
  const status = getParams.get('status') || '';
  const searchFormality = getParams.get('formalityId') || '';
  const page = getParams.get('page');
  const { data: DossierData, isFetching } = useGetCurrentUserFormality({
    page: page ? parseInt(page) : 1,
    status: status ? status : '',
    params: {
      title: 'formalityid',
      value: searchFormality,
    },
  });

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={DossierData?.formalities}
        columns={columns}
        pageCount={DossierData?.totalPages}
        searchableColumns={[
          { id: 'formalityId', title: 'currentUserFormalities' },
        ]}
        isFetching={isFetching}
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
