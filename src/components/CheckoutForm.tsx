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
import { useFormContext } from 'react-hook-form';
import useAppStore from '@/zustand/store';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Download } from 'lucide-react';
import Link from 'next/link';
export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { reset } = useFormContext();
  const [email, setEmail] = useState({ email: '' });
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { setActiveStep } = useAppStore();
  const router = useRouter();
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

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        // return_url: process.env.NEXT_PUBLIC_DOMAIN!,
        return_url: 'http://localhost:3000',
      },
      redirect: 'if_required',
    });
    console.log(paymentIntent?.status);
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    console.log(paymentIntent);
    if (
      error?.message &&
      (error?.type === 'card_error' || error?.type === 'validation_error')
    ) {
      setMessage(error?.message);
    } else {
      reset({}, { keepValues: false, keepDirty: false });
      setIsLoading(false);
      setActiveStep(0);
      setIsSuccess(true);
      // router.push('/');
    }
    // window.localStorage.removeItem('storageKey');
  };

  if (isSuccess) {
    return (
      <div className="flex  ">
        <div className="w-full max-w-[550px] flex flex-col gap-6 items-center justify-center ">
          <Image
            src={'/success.svg'}
            alt=""
            width={45}
            height={45}
            sizes={'100vw'}
          />
          <div className="text-semibold text-green-500">
            Votre paiement a été effectué avec succès
          </div>
          <div>Merci pour votre achat</div>
          <div>
            votre numéro de commande est: <b>37455</b>
          </div>
          <div className="flex gap-5">
            <Link href={'/'}>
              <Button>Go to DashBoard</Button>
            </Link>
            <Button
              className="flex gap-1"
              variant={'ghost'}
            >
              <Download />
              Telecharger reçu
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
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
