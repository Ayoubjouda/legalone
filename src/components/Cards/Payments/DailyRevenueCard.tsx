'use client';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';
import { useGetDailyRevenue } from '@/hooks/usePayment';

interface DailyRevenueCardProps {}

const DailyRevenueCard: FC<DailyRevenueCardProps> = () => {
  const { data: dailyRevenue } = useGetDailyRevenue();
  return (
    <DashboardCard
      title='Daily Revenue'
      icon='lineChart'
      content={dailyRevenue?.dailyRevenue}
    />
  );
};

export default DailyRevenueCard;
