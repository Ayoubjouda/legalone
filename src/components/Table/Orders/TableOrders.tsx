'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import { columns } from '@/components/Table/Orders/columns';
import { useGetOrders } from '@/hooks/useOrder';

interface TableOrdersProps {}

const TableOrders: FC<TableOrdersProps> = () => {
  const { data: OrdersData } = useGetOrders();

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={OrdersData}
        columns={columns}
      />
    </div>
  );
};

export default TableOrders;
