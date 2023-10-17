import api from '@/lib/axiosConfig';
import { Formality, OrderByIdResponse } from '@/types/order';
import { AxiosError, isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'sonner';

//Formality
const postFormality = async (data: Formality): Promise<FormalityResponse> => {
  const { data: response } = await api.post(`company`, data);
  return response;
};

export const useSubmitFormality = () => {
  const router = useRouter();
  const {
    mutate: FormalityMutation,
    isLoading,
    data: FormalityData,
  } = useMutation<
    FormalityResponse,
    AxiosError,
    { email: string; password: string },
    unknown
  >((data) => postFormality(data), {
    onSuccess(data) {
      toast('Formality created successfully');
      router.push(`/packages?formality=${data.createdFormality.id}`);
    },
    onError(err: Error | AxiosError) {
      if (isAxiosError(err)) {
        toast('Invalid Credentials');
      } else {
        toast('Something went wrong');
      }
    },
  });
  return { FormalityMutation, isLoading, FormalityData };
};

// Order
const getOrderById = async (id: number): Promise<OrderByIdResponse> => {
  const { data } = await api.get(`order/${id}`);
  return data;
};
export const useGetOrderById = (id: number) => {
  return useQuery<OrderByIdResponse, Error>('order', () => getOrderById(id));
};
