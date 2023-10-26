import api from '@/lib/axiosConfig';
import { Formality, OrderByIdResponse } from '@/types/order';
import { AxiosError, isAxiosError } from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'sonner';

//Formality
const postCreationFormality = async (
  formalityData: Formality
): Promise<FormalityResponse> => {
  const { data: response } = await api.post(`company`, formalityData);
  setTimeout(() => {}, 2000);
  return { ...response, type: formalityData.companyType };
};

export const useSubmitCreateFormality = () => {
  const router = useRouter();
  const {
    mutate: FormalityCreationMutation,
    isLoading,
    data: FormalityData,
  } = useMutation<
    FormalityResponse,
    AxiosError,
    { email: string; password: string },
    unknown
  >((postData) => postCreationFormality(postData), {
    onSuccess(data) {
      toast('Formality created successfully');
      localStorage.removeItem(data.type);

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
  return {
    FormalityCreationMutation,
    isLoading,
    FormalityData,
  };
};

// Order
const getOrderById = async (id: number): Promise<OrderByIdResponse> => {
  const { data } = await api.get(`order/${id}`);
  setTimeout(() => {}, 2000);

  return data;
};
export const useGetOrderById = (id: number) => {
  return useQuery<OrderByIdResponse, Error>('order', () => getOrderById(id));
};

const handlePayment = async (
  orderID: number
): Promise<handlePaymentResponse> => {
  const { data: response } = await api.post(`/payment/handlepayment`, {
    currency: 'usd',
    description: 'test payment',
    order: orderID as number,
  });
  setTimeout(() => {}, 2000);
  return response;
};

export const useHandlePayment = () => {
  const {
    mutate: PaymentMutation,
    isLoading,
    data: PaymentData,
  } = useMutation<handlePaymentResponse, AxiosError, number, unknown>(
    (data) => handlePayment(data),
    {
      onSuccess(data) {
        window.location.assign(data.payment.stripeIntent.sessionUrl);
      },
      onError(err: Error | AxiosError) {
        if (isAxiosError(err)) {
          toast('Payement Request failed');
        } else {
          toast('Something went wrong');
        }
      },
    }
  );
  return { PaymentMutation, isLoading, PaymentData };
};

const postUpdateFormality = async (
  formalityData: Formality,
  type: string
): Promise<FormalityResponse> => {
  const { data: response } = await api.post(`${type}`, formalityData);
  setTimeout(() => {}, 2000);
  return { ...response, type: formalityData.companyType };
};

export const useSubmitUpdateFormality = () => {
  const router = useRouter();
  const getParams = useSearchParams();
  const type = getParams.get('type') || '';
  const {
    mutate: FormalityUpdateMutation,
    isLoading,
    data: FormalityData,
  } = useMutation<FormalityResponse, AxiosError, unknown>(
    (postData) => postUpdateFormality(postData, type),
    {
      onSuccess(data) {
        toast('Formality created successfully');
        localStorage.removeItem(data.type);

        router.push(`/packages?formality=${data.createdFormality.id}`);
      },
      onError(err: Error | AxiosError) {
        if (isAxiosError(err)) {
          toast('Invalid Credentials');
        } else {
          toast('Something went wrong');
        }
      },
    }
  );
  return {
    FormalityUpdateMutation,
    isLoading,
    FormalityData,
  };
};
