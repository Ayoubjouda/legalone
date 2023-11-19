'use client';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';
import { useGetTotalRevenue } from '@/hooks/usePayment';

interface TotalRevenueProps {}

const TotalRevenueCard: FC<TotalRevenueProps> = () => {
  const { data: totalRevenue } = useGetTotalRevenue();
  return (
    <DashboardCard
      title='Total Revenue'
      icon='euro'
      content={totalRevenue?.totalRevenue}
    />
  );
};

export default TotalRevenueCard;
