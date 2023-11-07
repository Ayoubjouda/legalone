import api from '@/lib/axiosConfig';
import { useMutation, useQuery } from 'react-query';
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

type monthlyRevenue = {
  monthlyRevenue: number;
};

const getMonthlyRevenue = async (): Promise<monthlyRevenue> => {
  const { data } = await api.get(`order/canceled`);
  return data;
};

export const useGetMonthlyRevenue = () => {
  return useQuery<monthlyRevenue, Error>(
    'monthlyRevenue',
    () => getMonthlyRevenue(),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};
type TotalRevenue = {
  totalRevenue: string;
};

const getTotalRevenue = async (): Promise<TotalRevenue> => {
  const { data } = await api.get(`payment/total-revenue`);
  return data;
};

export const useGetTotalRevenue = () => {
  return useQuery<TotalRevenue, Error>(
    'totalRevenue',
    () => getTotalRevenue(),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

const getRecentSalles = async (): Promise<RecentSallesResponse[]> => {
  const { data } = await api.get(`payment/last-5-sales`);
  return data;
};

export const useGetRecentSalles = () => {
  return useQuery<RecentSallesResponse[], Error>(
    'recentSalles',
    () => getRecentSalles(),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

type MonthlyKpiPayment = {
  monthlyPayment: number;
  growth: number | null;
};

const getMonthlyKpiPayment = async (): Promise<MonthlyKpiPayment> => {
  const { data } = await api.get(`payment/monthlyPaymentKpi`);
  return data;
};

export const useGetMonthlyKpiPayment = () => {
  return useQuery<MonthlyKpiPayment, Error>(
    'monthlyKpiPayment',
    () => getMonthlyKpiPayment(),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

const postVerifyPayment = async (stripeCheckoutId: string): Promise<void> => {
  const { data } = await api.get(`payment/monthlyPaymentKpi`);
  return data;
};

export const useVerifyPayment = () => {
  return useMutation<void, Error, string>(
    'verifyPayment',
    (stripeCheckoutId) => postVerifyPayment(stripeCheckoutId),
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};