'use client';
import React, { useState, useEffect, useCallback } from 'react';
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

  const runCreateOrderOnLoad = useCallback(() => {
    createOrderMutation();
  }, [createOrderMutation]);

  useEffect(() => runCreateOrderOnLoad(), [runCreateOrderOnLoad]);

  if (isLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner
          size={'xl'}
          color="orange.500"
        />
      </div>
    );

  if (isError || !orderData?.paymentResult?.clientSecret)
    return <div>Error...</div>;

  const options: StripeElementsOptionsClientSecret = {
    clientSecret: orderData.paymentResult.clientSecret,
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <div>
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
