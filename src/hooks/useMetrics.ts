import api from '@/lib/axiosConfig';
import { useQuery } from 'react-query';

interface barChartResponse {
  type: string;
  monthly: number;
  weekly: number;
  daily: number;
}
const getBarChartMetrics = async (): Promise<barChartResponse[]> => {
  const { data } = await api.get(`order/order-bar-chart`);
  return data;
};

export const useGetBarChartMetrics = () => {
  return useQuery<barChartResponse[], Error>(['getBarChartMetrics'], () =>
    getBarChartMetrics()
  );
};

interface pieChartResponse {
  type: string;
  count: number;
  percentage: number;
}

const getPieChartMetrics = async (): Promise<pieChartResponse[]> => {
  const { data } = await api.get(`order/formality-order-pie-chart`);
  return data;
};

export const usePieChartMetrics = () => {
  return useQuery<pieChartResponse[], Error>(['getPieChartMetrics'], () =>
    getPieChartMetrics()
  );
};
