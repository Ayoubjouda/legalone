'use client';
import { columns } from '@/components/Table/ClientDossier/columns';
import { useGetCurrentUserDoneFormality } from '@/hooks/useDossier';
import { FC } from 'react';
import { DataTable } from '../data-table';
import FilteringButton from '../FilteringButton';
import { useSearchParams } from 'next/navigation';
interface TableDossierProps {}

const TableDossierClient: FC<TableDossierProps> = () => {
  const getParams = useSearchParams();
  const status = getParams.get('status') || '';
  const page = getParams.get('page');
  const { data: DossierData } = useGetCurrentUserDoneFormality({
    page: page ? parseInt(page) : 1,
    status: status ? status : 'INPROGRESS,DONE,PENDING,CANCELED',
  });

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={DossierData?.formalities}
        columns={columns}
        pageCount={DossierData?.totalPages}
      >
        <FilteringButton
          values={['PENDING', 'DONE', 'INPROGRESS', 'CANCELED']}
          queryKey='currentUserDoneFormalities'
        />
      </DataTable>
    </div>
  );
};

export default TableDossierClient;
