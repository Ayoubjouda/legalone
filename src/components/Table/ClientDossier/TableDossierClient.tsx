'use client';
import { columns } from '@/components/Table/ClientDossier/columns';
import { useGetCurrentUserDoneFormality } from '@/hooks/useDossier';
import { FC } from 'react';
import { DataTable } from '../data-table';
interface TableDossierProps {}

const TableDossierClient: FC<TableDossierProps> = () => {
  const { data: DossierData } = useGetCurrentUserDoneFormality();

  return (
    <div className='rounded-md border bg-white p-4'>
      <DataTable
        data={DossierData?.formalities}
        columns={columns}
      />
    </div>
  );
};

export default TableDossierClient;
