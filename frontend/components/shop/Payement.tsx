import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { URL_STRIPE } from "../../constants/Constants";

const Payement = ({ deliveryPrice }: { deliveryPrice: number }) => {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null>>();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(URL_STRIPE + "/config")
      .then(async (r) => {
        console.log("test");

        const { publishableKey } = await r.json();
        console.log(publishableKey);
        if (loadStripe !== null) {
          setStripePromise(loadStripe(publishableKey));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(URL_STRIPE + "/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    })
      .then(async (result) => {
        const { clientSecret } = await result.json();
        console.log(clientSecret);

        setClientSecret(clientSecret);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Payement;
