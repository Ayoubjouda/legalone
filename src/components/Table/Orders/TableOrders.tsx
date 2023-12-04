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
  const page = getParams.get('page');
  const { data: OrdersData } = useGetOrders({
    page: page ? parseInt(page) : 1,
    status: status ? status : '',
  });

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={OrdersData?.orders}
        columns={columns}
        pageCount={OrdersData?.totalPages}
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
