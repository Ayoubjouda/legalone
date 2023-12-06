'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import AddModal from './AddModal';
import { columns } from './columns';
import { useGetUsers } from '@/hooks/useUser';
import FilteringButton from '../FilteringButton';
import { useSearchParams } from 'next/navigation';

interface TableUsersProps {}

const TableUsers: FC<TableUsersProps> = () => {
  const getParams = useSearchParams();
  const status = getParams.get('status') || '';
  const searchEmail = getParams.get('email') || '';

  const page = getParams.get('page');
  const { data: UsersData, isFetching } = useGetUsers({
    page: page ? parseInt(page) : 1,
    status: status ? status : '',
    params: {
      title: 'email',
      value: searchEmail,
    },
  });

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={UsersData?.users}
        columns={columns}
        pageCount={UsersData?.totalPages}
        searchableColumns={[{ id: 'email', title: 'getUsers' }]}
        isFetching={isFetching}
      >
        <FilteringButton
          values={['ACTIVE', 'BANNED', 'SUSPENDED']}
          queryKey='getUsers'
        />
        <AddModal />
      </DataTable>
    </div>
  );
};

export default TableUsers;
