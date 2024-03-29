import api from '@/lib/axiosConfig';
import { Formality, OrderByIdResponse } from '@/types/order';
import { AxiosError, isAxiosError } from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'sonner';
import { FormalitiesResponse } from '@/types/order';
//Formality

interface FormalityCheckout extends FormalitiesResponse {
  formalityId: number;
}
const postCreationFormality = async (
  formalityData: Formality
): Promise<FormalityCheckout> => {
  const { data: response } = await api.post(`company`, formalityData);
  return { ...response, type: formalityData.companyType };
};

export const useSubmitCreateFormality = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || '';
  const {
    mutate: FormalityCreationMutation,
    isLoading,
    data: FormalityData,
  } = useMutation<
    FormalityCheckout,
    AxiosError,
    { email: string; password: string },
    unknown
  >((postData) => postCreationFormality(postData), {
    onSuccess(data) {
      toast('Formality created successfully');
      // localStorage.removeItem(data.type);
      const selectedFormalityId = Object(data.formalities)?.formalityId;

      router.push(`/packages?formality=${selectedFormalityId}&type=${type}`);
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
): Promise<FormalityCheckout> => {
  const { data: response } = await api.post(`${type}`, formalityData);
  return { ...response, type: type };
};

export const useSubmitUpdateFormality = () => {
  const router = useRouter();
  const getParams = useSearchParams();
  const type = getParams.get('type') || '';
  const {
    mutate: FormalityUpdateMutation,
    isLoading,
    data: FormalityData,
  } = useMutation<FormalityCheckout, AxiosError, unknown>(
    (postData) => postUpdateFormality(postData, type),
    {
      onSuccess(data) {
        toast('Formality created successfully');
        localStorage.removeItem(type);
        const selectedFormalityId = Object(data.formalities)?.formalityId;
        router.push(`/packages?formality=${selectedFormalityId}`);
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

const postFermetureFormality = async (
  formalityData: Formality,
  type: string
): Promise<FormalityCheckout> => {
  const { data: response } = await api.post(`${type}`, formalityData);
  return { ...response, type: formalityData.companyType };
};

export const useSubmitFermetureFormality = () => {
  const router = useRouter();
  const getParams = useSearchParams();
  const type = getParams.get('type') || '';
  const {
    mutate: FormalityDissolutionMutation,
    isLoading,
    data: FormalityData,
  } = useMutation<FormalityCheckout, AxiosError, unknown>(
    (postData) => postFermetureFormality(postData, type),
    {
      onSuccess(data) {
        toast('Formality created successfully');
        localStorage.removeItem(type);
        const selectedFormalityId = Object(data.formalities)?.formalityId;

        router.push(`/packages?formality=${selectedFormalityId}`);
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
    FormalityDissolutionMutation,
    isLoading,
    FormalityData,
  };
};

const postSubscriptionFormality = async (
  formalityData: Formality
): Promise<FormalityCheckout> => {
  const { data: response } = await api.post(`domiciliation`, formalityData);

  if (!response.formalities) throw new Error('Error Creating Formality');
  console.log('FormalityId', response.formalities);
  const { data: order } = await api.post('order', {
    formality: response.formalities.formalityId,

    subscription: formalityData.subscription,
  });
  console.log(order);
  if (!order) throw new Error('Error Creating Order');

  const { data: payment } = await api.post('payment/handleSubscription', {
    currency: 'usd',
    description: 'test payment',
    order: order.id as number,
  });
  window.location.assign(payment.payment.stripeIntent.sessionUrl);
  return { ...response, type: formalityData.companyType };
};

export const useCreateSubscriptionFormality = () => {
  // const router = useRouter();
  const searchParams = useSearchParams();
  // const type = searchParams.get('type') || '';
  const {
    mutate: FormalityCreationMutation,
    isLoading,
    data: FormalityData,
  } = useMutation<
    FormalityCheckout,
    AxiosError,
    { email: string; password: string },
    unknown
  >((postData) => postSubscriptionFormality(postData), {
    onSuccess(data) {
      toast('Formality created successfully');
      // localStorage.removeItem(data.type);
      // const selectedFormalityId = Object(data.formalities)?.formalityId;
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
