'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import { columns } from './columns';
import { useGetPayments } from '@/hooks/usePayment';
import FilteringButton from '../FilteringButton';
import { useSearchParams } from 'next/navigation';

interface TablePaymentsProps {}

const TablePayments: FC<TablePaymentsProps> = () => {
  const getParams = useSearchParams();
  const status = getParams.get('status') || '';
  const searchId = getParams.get('id') || '';

  const page = getParams.get('page');
  const { data: PaymentsData, isFetching } = useGetPayments({
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
        data={PaymentsData?.payments}
        columns={columns}
        pageCount={PaymentsData?.totalPages}
        searchableColumns={[{ id: 'id', title: 'payment' }]}
        isFetching={isFetching}
      >
        <FilteringButton
          values={['PENDING', 'COMPLETED', 'CANCELED']}
          queryKey='payment'
        />
      </DataTable>
    </div>
  );
};

export default TablePayments;
