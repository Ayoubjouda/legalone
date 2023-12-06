'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import AddModal from './AddModal';
import { columns } from './columns';
import { useGetClients } from '@/hooks/useUser';
import FilteringButton from '../FilteringButton';
import { useSearchParams } from 'next/navigation';

interface TableClientsProps {}

const TableClients: FC<TableClientsProps> = () => {
  const getParams = useSearchParams();
  const status = getParams.get('status') || '';
  const page = getParams.get('page');
  const { data: clientsData, isFetching } = useGetClients({
    page: page ? parseInt(page) : 1,
    status: status ? status : '',
  });

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={clientsData?.users}
        columns={columns}
        pageCount={clientsData?.totalPages}
        searchableColumns={[{ id: 'email', title: 'getClients' }]}
        isFetching={isFetching}
      >
        <FilteringButton
          values={['ACTIVE', 'BANNED', 'SUSPENDED']}
          queryKey='getClients'
        />
        <AddModal />
      </DataTable>
    </div>
  );
};

export default TableClients;
