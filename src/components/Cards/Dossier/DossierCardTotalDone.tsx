'use client';

import { useGetTotalDoneFormalities } from '@/hooks/useDossier';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';

interface OrdersTotalProps {}

const DossierCardTotalDone: FC<OrdersTotalProps> = () => {
  const { data: TotalDossier } = useGetTotalDoneFormalities();
  return (
    <DashboardCard
      title='Total Done Dossier'
      icon='folderCheck'
      content={TotalDossier?.total}
    />
  );
};

export default DossierCardTotalDone;
