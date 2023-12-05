'use client';

import { useGetTotalFormalities } from '@/hooks/useDossier';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';

interface OrdersTotalProps {}

const DossierCardTotal: FC<OrdersTotalProps> = () => {
  const { data: TotalDossier } = useGetTotalFormalities();
  return (
    <DashboardCard
      title='Total Dossier'
      icon='folderKanban'
      content={TotalDossier?.total}
    />
  );
};

export default DossierCardTotal;
