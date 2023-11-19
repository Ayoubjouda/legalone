'use client';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';
import { useGetWeeklyRevenue } from '@/hooks/usePayment';

interface WeeklyRevenueCardProps {}

const WeeklyRevenueCard: FC<WeeklyRevenueCardProps> = () => {
  const { data: dailyRevenue } = useGetWeeklyRevenue();
  return (
    <DashboardCard
      title='Weekly Revenue'
      icon='lineChart'
      content={dailyRevenue?.weeklyRevenue}
    />
  );
};

export default WeeklyRevenueCard;
