import { useGetTotalCanceledOrders } from '@/hooks/useOrder';
import { FC } from 'react';
import DashboardCard from '../DashboardCard';

interface OrdersCancelledProps {}

const OrdersCancelled: FC<OrdersCancelledProps> = () => {
  const { data: TotalCancelledOrders } = useGetTotalCanceledOrders();
  return (
    <DashboardCard
      title='Commandes annulées'
      icon='packageX'
      content={TotalCancelledOrders?.canceledOrders}
    />
  );
};

export default OrdersCancelled;
