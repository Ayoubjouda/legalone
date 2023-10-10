import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import useAppStore from '@/zustand/store';
import { isAxiosError } from 'axios';
import { useFormContext } from 'react-hook-form';
import { SaasSchemaType } from '@/lib/validators/formValidators';
import { Order, OrderType } from '@/types/order';
import { toast } from 'sonner';

async function createOrder(accessToken: string, order: OrderType) {
  if (!accessToken) throw new Error('No access token');
  const { data } = await api.post('payment/handlePayment', {
    currency: 'usd',
    orderId: 17,
    packageId: 6,
    description: 'Order payment',
  });
  return data;
}

export function useStripe() {
  // const { getValues } = useFormContext();
  const FormValues = {};
  const { accessToken, Order } = useAppStore();

  const {
    mutate: createOrderMutation,
    isLoading,
    data: orderData,
    isError,
  } = useMutation(() => createOrder(accessToken!, Order!), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        console.log(err);
        toast(`${err.response?.data?.message}`);
      }
    },
  });

  return { createOrderMutation, orderData, isLoading, isError };
}
