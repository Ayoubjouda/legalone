import { useGetTotalPendingOrders } from '@/hooks/useOrder';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';

interface OrdersPendingProps {}

const OrdersPending: FC<OrdersPendingProps> = () => {
  const { data: TotalPendingOrders } = useGetTotalPendingOrders();
  return (
    <DashboardCard
      title='Commandes en attente'
      icon='packagePlus'
      content={TotalPendingOrders?.pendingOrders}
    />
  );
};

export default OrdersPending;
