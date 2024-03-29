import api from '@/lib/axiosConfig';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'sonner';

import { Order } from '@/types/order';

interface getOrdersParams {
  page?: number;
  status?: string;
  params?: {
    id?: string;
    title?: string;
    value?: string;
  };
}
interface getOrdersResponse {
  orders: Order[];
  totalPages: number;
}

const getOrders = async (
  params: getOrdersParams
): Promise<getOrdersResponse> => {
  const { data } = await api.get(
    `order?page=${params.page}&limit=10&statusFilter=${params.status}&${params?.params?.title}=${params.params?.value}`
  );
  return data;
};

export const useGetOrders = (params: getOrdersParams) => {
  return useQuery<getOrdersResponse, Error>(
    ['Orders', params],
    () => getOrders(params),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
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

type TotalOrders = {
  totalOrders: number;
};

const getTotalOrders = async (): Promise<TotalOrders> => {
  const { data } = await api.get(`order/total`);
  return data;
};

export const useGetTotalOrders = () => {
  return useQuery<TotalOrders, Error>('totalOrders', () => getTotalOrders(), {
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

type TotalCompletedOrders = {
  completedOrders: number;
};

const getTotalCompletedOrders = async (): Promise<TotalCompletedOrders> => {
  const { data } = await api.get(`order/completed`);
  return data;
};

export const useGetTotalCompletedOrders = () => {
  return useQuery<TotalCompletedOrders, Error>(
    'totalCompletedOrders',
    () => getTotalCompletedOrders(),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

type TotalPendingOrders = {
  pendingOrders: number;
};

const getTotalPendingOrders = async (): Promise<TotalPendingOrders> => {
  const { data } = await api.get(`order/pending`);
  return data;
};

export const useGetTotalPendingOrders = () => {
  return useQuery<TotalPendingOrders, Error>(
    'totalPendingOrders',
    () => getTotalPendingOrders(),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

type TotalCanceledOrders = {
  canceledOrders: number;
};

const getTotalCanceledOrders = async (): Promise<TotalCanceledOrders> => {
  const { data } = await api.get(`order/canceled`);
  return data;
};

export const useGetTotalCanceledOrders = () => {
  return useQuery<TotalCanceledOrders, Error>(
    'totalCanceledOrders',
    () => getTotalCanceledOrders(),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};
