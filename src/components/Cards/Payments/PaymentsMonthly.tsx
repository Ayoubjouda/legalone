import { FC } from 'react';
import DashboardCard from '../DashboardCard';
import { useGetMonthlyKpiPayment } from '@/hooks/usePayment';

interface PaymentsMonthlyProps {}

const PaymentsMonthly: FC<PaymentsMonthlyProps> = () => {
  const { data: monthlyKpiPayment } = useGetMonthlyKpiPayment();
  return (
    <DashboardCard
      title='Monthly Revenue'
      icon='lineChart'
      content={monthlyKpiPayment?.monthlyPayment}
    />
  );
};

export default PaymentsMonthly;
