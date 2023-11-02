import { FC } from 'react';
import { useGetTotalOrders } from '@/hooks/useOrder';
import DashboardCard from './DashboardCard';

interface OrdersTotalProps {}

const OrdersTotal: FC<OrdersTotalProps> = () => {
  const { data: TotalOrders } = useGetTotalOrders();
  return (
    <DashboardCard
      title='Total Orders'
      icon='boxes'
      content={TotalOrders?.totalOrders}
    />
  );
};

export default OrdersTotal;
