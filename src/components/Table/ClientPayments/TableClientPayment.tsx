'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import { columns } from './columns';
import { useGetClientPayments } from '@/hooks/usePayment';
import FilteringButton from '../FilteringButton';
import { useSearchParams } from 'next/navigation';

interface TablePaymentsProps {}

const TableClientPayment: FC<TablePaymentsProps> = () => {
  const getParams = useSearchParams();
  const status = getParams.get('status') || '';
  const page = getParams.get('page');
  const { data: PaymentsData } = useGetClientPayments({
    page: page ? parseInt(page) : 1,
    status: status ? status : '',
  });

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={PaymentsData?.payments}
        pageCount={PaymentsData?.totalPages}
        columns={columns}
      >
        <FilteringButton
          values={['PENDING', 'COMPLETED', 'CANCELED']}
          queryKey='currentUserPayment'
        />
      </DataTable>
    </div>
  );
};

export default TableClientPayment;
