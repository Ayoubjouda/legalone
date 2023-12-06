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
  const searchId = getParams.get('id') || '';
  const { data: PaymentsData, isFetching } = useGetClientPayments({
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
        pageCount={PaymentsData?.totalPages}
        columns={columns}
        searchableColumns={[{ id: 'id', title: 'currentUserPayment' }]}
        isFetching={isFetching}
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
