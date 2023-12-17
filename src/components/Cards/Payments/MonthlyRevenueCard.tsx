'use client';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';
import { useGetMonthlyKpiPayment } from '@/hooks/usePayment';

interface MonthlyRevenueProps {}

const MonthlyRevenueCard: FC<MonthlyRevenueProps> = () => {
  const { data: monthlyKpiPayment } = useGetMonthlyKpiPayment();
  return (
    <DashboardCard
      title='Revenue mensuel'
      icon='lineChart'
      content={monthlyKpiPayment?.monthlyPayment}
    />
  );
};

export default MonthlyRevenueCard;
