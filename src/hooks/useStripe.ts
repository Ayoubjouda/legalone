import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import { useToast } from '@/components/ui/use-toast';
import useAppStore from '@/zustand/store';
import { isAxiosError } from 'axios';
import { useFormContext } from 'react-hook-form';
import { SaasSchemaType } from '@/lib/validators/formValidators';
import { Order, OrderType } from '@/types/order';

async function createOrder(accessToken: string, order: OrderType) {
  if (!accessToken) throw new Error('No access token');
  const { data } = await api.post('payment/handlePayment', {
    currency: 'usd',
    orderId: order.orderId,
    packageId: order.pack.id,
    description: 'Order payment',
  });
  return data;
}

export function useStripe() {
  const { toast } = useToast();
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
        toast({
          title: 'Checkout Error',
          description: `${err.response?.data?.message}`,
        });
      }
    },
  });

  return { createOrderMutation, orderData, isLoading, isError };
}
