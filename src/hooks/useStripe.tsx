import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import { useToast } from '@/components/ui/use-toast';
import useAppStore from '@/zustand/store';
import { isAxiosError } from 'axios';

async function createOrder(accessToken: string) {
  if (!accessToken) throw new Error('No access token');
  const { data } = await api.post(
    'order/create-order',
    {
      companyData: {
        creationDelay: 'WEEKLY',
        activityField: 2,
        companyName: 'STATEDIGIT',
        selectedManagerType: 'PersonalManager',
        firstName: 'John',
        lastName: 'Doe',
        sex: 'Male',
        associer: 'Associer Name',
        nonAssociateManager: true,
        shareCapital: 10000,
        companyLocation: 'New York, USA',
        companyType: 'SARL',
        accountingExpert: true,
        email: 'statedigit@gmail.com',
        phone: '123-456-7890',
      },
      paymentData: {
        currency: 'USD',
        description: 'Order payment',
      },
      packageField: 1,
      description: 'Order payment',
      companyType: 'SARL',
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
}

export function useStripe() {
  const { toast } = useToast();

  const { accessToken } = useAppStore();
  const {
    mutate: createOrderMutation,
    isLoading,
    data: orderData,
    isError,
  } = useMutation('create-order', () => createOrder(accessToken!), {
    onError: (err) => {
      if (isAxiosError(err)) {
        toast({
          title: 'Checkout Error',
          description: `${err.response?.data?.message}`,
        });
      }
    },
  });

  return { createOrderMutation, orderData, isLoading, isError };
}
