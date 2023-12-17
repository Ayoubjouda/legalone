'use client';
import { useGetTotalDoneFormalities } from '@/hooks/useDossier';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';

interface OrdersTotalProps {}

const DossierCardTotalInProgress: FC<OrdersTotalProps> = () => {
  const { data: TotalDossier } = useGetTotalDoneFormalities();
  return (
    <DashboardCard
      title='Dossier en attente'
      icon='folderClock'
      content={TotalDossier?.total}
    />
  );
};

export default DossierCardTotalInProgress;
