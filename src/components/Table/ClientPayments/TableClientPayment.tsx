'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import { columns } from './columns';
import { useGetClientPayments } from '@/hooks/usePayment';

interface TablePaymentsProps {}

const TableClientPayment: FC<TablePaymentsProps> = () => {
  const { data: PaymentsData } = useGetClientPayments();

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={PaymentsData}
        columns={columns}
      />
    </div>
  );
};

export default TableClientPayment;
