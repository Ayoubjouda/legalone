import api from '@/lib/axiosConfig';
import { useQuery } from 'react-query';
import { toast } from 'sonner';

const getPayments = async (): Promise<Payment[]> => {
  const { data } = await api.get(`payment`);
  return data;
};

export const useGetPayments = () => {
  return useQuery<Payment[], Error>('payment', () => getPayments(), {
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
