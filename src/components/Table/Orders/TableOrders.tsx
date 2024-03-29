'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import { columns } from '@/components/Table/Orders/columns';
import { useGetOrders } from '@/hooks/useOrder';
import FilteringButton from '../FilteringButton';
import { useSearchParams } from 'next/navigation';

interface TableOrdersProps {}

const TableOrders: FC<TableOrdersProps> = () => {
  const getParams = useSearchParams();
  const status = getParams.get('status') || '';
  const searchId = getParams.get('id') || '';
  const page = getParams.get('page');
  const { data: OrdersData, isFetching } = useGetOrders({
    page: page ? parseInt(page) : 1,
    status: status ? status : '',
    params: {
      title: 'id',
      value: searchId,
    },
  });

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={OrdersData?.orders}
        columns={columns}
        pageCount={OrdersData?.totalPages}
        searchableColumns={[{ id: 'id', title: 'Orders' }]}
        isFetching={isFetching}
      >
        <FilteringButton
          values={['PENDING', 'COMPLETED', 'CANCELLED']}
          queryKey='payment'
        />
      </DataTable>
    </div>
  );
};

export default TableOrders;
