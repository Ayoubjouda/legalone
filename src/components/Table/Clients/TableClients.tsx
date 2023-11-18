'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import AddModal from './AddModal';
import { columns } from './columns';
import { useGetClients } from '@/hooks/useUser';

interface TableClientsProps {}

const TableClients: FC<TableClientsProps> = () => {
  const { data: clientsData } = useGetClients();

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={clientsData}
        columns={columns}
      >
        <AddModal />
      </DataTable>
    </div>
  );
};

export default TableClients;
