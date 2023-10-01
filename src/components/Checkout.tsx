'use client';
import React, { useEffect } from 'react';
import {
  StripeElementsOptionsClientSecret,
  loadStripe,
} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/CheckoutForm';
import { useStripe } from '@/hooks/useStripe';
import { Spinner } from '@chakra-ui/react';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Checkout() {
  const { createOrderMutation, isLoading, orderData, isError } = useStripe();

  useEffect(() => {
    createOrderMutation();
  }, [createOrderMutation]);

  if (isLoading)
    return (
      <div className="flex  w-full items-center justify-center">
        <Spinner
          size={'xl'}
          color="orange.500"
        />
      </div>
    );
  if (isError || !orderData?.payment.stripeIntent?.clientSecret)
    return <div>Error...</div>;

  const options: StripeElementsOptionsClientSecret = {
    clientSecret: orderData.payment.stripeIntent.clientSecret,
    appearance: {
      theme: 'flat',
      variables: {
        colorPrimary: '#0570de',
        colorBackground: '#ffffff',
        colorText: '#30313d',
        colorDanger: '#df1b41',
        fontFamily: 'Ideal Sans, system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '8px',
        // See all possible variables below
      },
    },
  };

  return (
    <div className="w-full">
      {orderData ? (
        <Elements
          options={options}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
      ) : null}
    </div>
  );
}
