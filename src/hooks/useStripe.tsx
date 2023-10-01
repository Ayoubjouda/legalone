import { useMutation } from 'react-query';
import api from '@/lib/axiosConfig';
import { useToast } from '@/components/ui/use-toast';
import useAppStore from '@/zustand/store';
import { isAxiosError } from 'axios';
import { useFormContext } from 'react-hook-form';
import { SaasSchemaType } from '@/lib/validators/formValidators';
// async function createOrder(accessToken: string, FormValues: SaasSchemaType) {
//   if (!accessToken) throw new Error('No access token');
//   console.log(FormValues);
//   const { data } = await api.post('order/create-order', {
//     companyData: {
//       creationDelay: FormValues.creationDelay,
//       activityField: FormValues.activityField,
//       companyName: FormValues.companyName,
//       selectedManagerType: FormValues.selectedManagerType,
//       firstName: FormValues.firstName,
//       lastName: FormValues.lastName,
//       sex: FormValues.sex,
//       associer: FormValues.associerNumber,
//       nonAssociateManager: FormValues.president,
//       shareCapital: Number(FormValues.shareCapital),
//       companyLocation: FormValues.headquarter,
//       companyType: FormValues.companyType,
//       //TODO: add accountingExpert Form
//       accountingExpert: true,
//       email: FormValues.email,
//       phone: FormValues.phone,
//     },
//     paymentData: {
//       currency: 'USD',
//       description: 'Order payment',
//     },
//     packageField: FormValues.pack,
//     description: 'Order payment',
//     companyType: FormValues.companyType,
//   });
//   return data;
// }

async function createOrder(accessToken: string, orderId: number) {
  if (!accessToken) throw new Error('No access token');
  const { data } = await api.post('payment/handlePayment', {
    currency: 'usd',
    amount: 100,
    orderId: orderId,
    packageId: 7,
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
  } = useMutation(() => createOrder(accessToken!, Order!.orderId), {
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
