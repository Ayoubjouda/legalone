import React, { FormEvent, useEffect, useState } from 'react';
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import {
  StripeLinkAuthenticationElementChangeEvent,
  StripePaymentElementOptions,
} from '@stripe/stripe-js';
import { Button } from './ui/button';
import { Spinner } from '@chakra-ui/react';

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
    layout: {
      type: 'accordion',
      defaultCollapsed: false,
      radios: true,
      spacedAccordionItems: false,
    },
    business: {
      name: 'LegalCenter',
    },
  };

  return (
    <div className="flex  ">
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="w-full max-w-[550px] flex flex-col gap-2 items-center justify-center "
      >
        <div>
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
        </div>

        <Button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="w-full"
        >
          <span id="button-text">
            {isLoading ? <Spinner /> : 'Payer en toute Securité'}
          </span>
        </Button>
        {/* Show any error or success messages */}
        {message && (
          <div
            id="payment-message"
            className="text-semibold text-red-500"
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
