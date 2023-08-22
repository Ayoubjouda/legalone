'use client';
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/CheckoutForm';
import api from '@/lib/axiosConfig';
import useAppStore from '@/zustand/store';
interface pageProps {}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState('');
  const { accessToken } = useAppStore();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    api
      .post(
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
      )
      .then((data) =>
        console.log(setClientSecret(data.data.paymentResult.clientSecret))
      )
      .catch((err) => console.log(err));
  }, []);

  //   const appearance = {
  //     theme: 'stripe',
  //   };
  const options = {
    clientSecret,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements
          options={options}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
