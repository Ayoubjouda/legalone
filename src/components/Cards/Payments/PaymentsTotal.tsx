import { FC } from 'react';
import DashboardCard from '../DashboardCard';
import { useGetTotalRevenue } from '@/hooks/usePayment';

interface PaymentsTotalProps {}

const PaymentsTotal: FC<PaymentsTotalProps> = () => {
  const { data: totalRevenue, isLoading: isToalRevenueLoading } =
    useGetTotalRevenue();
  return (
    <DashboardCard
      title='Total Revenue'
      icon='euro'
      content={totalRevenue?.totalRevenue}
    />
  );
};

export default PaymentsTotal;
