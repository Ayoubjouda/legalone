import api from '@/lib/axiosConfig';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'sonner';

import { Order } from '@/types/order';

const getOrders = async (): Promise<Order[]> => {
  const { data } = await api.get(`order`);
  return data;
};

export const useGetOrders = () => {
  return useQuery<Order[], Error>('Orders', () => getOrders(), {
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

const deleteOrder = async (id: number): Promise<void> => {
  const { data } = await api.delete(`order/${id}`);
  return data;
};

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>(
    'deleteOrder',
    (id) => deleteOrder(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Orders');
        toast.success('Order deleted successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};
