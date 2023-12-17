'use client';

import { useGetTotalCancelledFormalities } from '@/hooks/useDossier';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';

interface OrdersTotalProps {}

const DossierCardTotalCancelled: FC<OrdersTotalProps> = () => {
  const { data: TotalDossier } = useGetTotalCancelledFormalities();
  return (
    <DashboardCard
      title='Dossier annulées'
      icon='folderX'
      content={TotalDossier?.total}
    />
  );
};

export default DossierCardTotalCancelled;
