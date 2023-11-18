'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import AddModal from './AddModal';
import { columns } from './columns';
import { useGetUsers } from '@/hooks/useUser';

interface TableUsersProps {}

const TableUsers: FC<TableUsersProps> = () => {
  const { data: UsersData } = useGetUsers();

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={UsersData}
        columns={columns}
      >
        <AddModal />
      </DataTable>
    </div>
  );
};

export default TableUsers;
