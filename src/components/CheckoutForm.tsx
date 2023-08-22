import React, { FormEvent, FormEventHandler, useEffect, useState } from 'react';
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import {
  StripeError,
  StripeLinkAuthenticationElementChangeEvent,
  StripePaymentElementOptions,
} from '@stripe/stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState({ email: '' });
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }
  }, [stripe]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: process.env.NEXT_PUBLIC_DOMAIN!,
      },
    });
    console.log(error);

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.

    if (
      error?.message &&
      (error?.type === 'card_error' || error?.type === 'validation_error')
    ) {
      setMessage(error?.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="max-w-sm"
      >
        <LinkAuthenticationElement
          id="link-authentication-element"
          onChange={(e: StripeLinkAuthenticationElementChangeEvent) =>
            setEmail(e.value)
          }
        />
        <PaymentElement
          id="payment-element"
          options={paymentElementOptions}
        />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div
                className="spinner"
                id="spinner"
              ></div>
            ) : (
              'Pay now'
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
