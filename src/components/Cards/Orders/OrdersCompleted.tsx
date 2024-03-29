import { FC } from 'react';
import { useGetTotalCompletedOrders } from '@/hooks/useOrder';
import DashboardCard from '../DashboardCard';

interface OrdersCompletedProps {}

const OrdersCompleted: FC<OrdersCompletedProps> = () => {
  const { data: TotalCompleted } = useGetTotalCompletedOrders();
  return (
    <DashboardCard
      title='Commandes terminées'
      icon='packageCheck'
      content={TotalCompleted?.completedOrders}
    />
  );
};

export default OrdersCompleted;
