'use client';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';
import { useGetWeeklyClient } from '@/hooks/useUser';

interface NewClientsCardProps {}

const NewClientsCard: FC<NewClientsCardProps> = () => {
  const { data: weeklyClient } = useGetWeeklyClient();
  return (
    <DashboardCard
      title='Client hebdomadaire'
      icon='users'
      content={weeklyClient?.users}
    />
  );
};

export default NewClientsCard;
