'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import { useGetFormalities } from '@/hooks/useDossier';
import { columns } from '@/components/Table/Dossier/columns';
import FilteringButton from '../FilteringButton';
import { useSearchParams } from 'next/navigation';
interface TableDossierProps {}

const TableDossier: FC<TableDossierProps> = () => {
  const getParams = useSearchParams();
  const status = getParams.get('status') || '';
  const page = getParams.get('page');
  const { data: DossierData } = useGetFormalities({
    page: page ? parseInt(page) : 1,
    status: status ? status : '',
  });

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={DossierData?.formalities}
        columns={columns}
        pageCount={DossierData?.totalPages}
      >
        <FilteringButton
          values={[
            'PENDING',
            'DONE',
            'INPROGRESS',
            'WAITINGFORPAYMENT',
            'CANCELED',
          ]}
          queryKey='GetFormalities'
        />
      </DataTable>
    </div>
  );
};

export default TableDossier;
