'use client';
import { FC } from 'react';
import { DataTable } from '../data-table';
import { useGetCurrentUserFormality } from '@/hooks/useDossier';
import { columns } from '@/components/Table/Dossier/columns';
interface TableDossierProps {}

const TableDossierClient: FC<TableDossierProps> = () => {
  const { data: DossierData } = useGetCurrentUserFormality();

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
