'use client';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';
import { useGetTotalClients } from '@/hooks/useUser';

interface AllClientsCardProps {}

const TotalClientsCard: FC<AllClientsCardProps> = () => {
  const { data: totalClients } = useGetTotalClients();
  return (
    <DashboardCard
      title='Total Clients'
      icon='users'
      content={totalClients?.users}
    />
  );
};

export default TotalClientsCard;
