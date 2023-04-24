import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import {
  URL_STRIPE_CONFIG,
  URL_STRIPE_PAYMENT,
} from "../../constants/Constants";
import axios from "axios";
import { useSelector } from "react-redux";
import { subtotal } from "../../utils/shopUtils";
import { RootState } from "../../store/store";
import { productsData } from "../../types/product";

const Payement = ({ deliveryPrice }: { deliveryPrice: number }) => {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null>>();
  const [clientSecret, setClientSecret] = useState("");

  const shopData: productsData = useSelector(
    (state: RootState) => state.shop.value
  );
  const totalPayement = (subtotal(shopData) + deliveryPrice).toFixed(2);

  useEffect(() => {
    fetch(URL_STRIPE_CONFIG)
      .then(async (res) => {
        const { publishableKey } = await res.json();
        if (loadStripe !== null) {
          setStripePromise(loadStripe(publishableKey));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .post(URL_STRIPE_PAYMENT, {
        amount: totalPayement,
      })
      .then(async (res) => {
        const { clientSecret } = await res.data;
        setClientSecret(clientSecret);
      })
      .catch((err) => console.log(err));
  }, [totalPayement]);

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
