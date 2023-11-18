'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import { columns } from './columns';
import { useGetPayments } from '@/hooks/usePayment';

interface TablePaymentsProps {}

const TablePayments: FC<TablePaymentsProps> = () => {
  const { data: PaymentsData } = useGetPayments();

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={PaymentsData}
        columns={columns}
      />
    </div>
  );
};

export default TablePayments;
