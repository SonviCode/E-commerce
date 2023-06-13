import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import {
  URL_STRIPE_CONFIG,
  URL_STRIPE_CREATE_PAYMENT,
} from "../../constants/Constants";
import axios from "axios";
import { useSelector } from "react-redux";
import { subtotal } from "../../utils/shopUtils";
import { RootState } from "../../store/store";
import { productsData } from "../../types/product";
import { User } from "../../types/user";
import { Delivery } from "../../types/shop";

const Payement = () => {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null>>();
  const [clientSecret, setClientSecret] = useState("");

  const shopData: productsData = useSelector(
    (state: RootState) => state.shop.value
  );
  const user: User = useSelector((state: RootState) => state.user.value);
  const delivery: Delivery = useSelector((state: RootState) => state.delivery.value);

  console.log(delivery);
  

  const totalPayement = (
    subtotal(shopData) + (delivery ? delivery.deliveryPrice : 0)
  ).toFixed(2);

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
      .post(URL_STRIPE_CREATE_PAYMENT, {
        amount: totalPayement,
        userEmail: user?.email,
      })
      .then(async (res) => {
        const { clientSecret } = await res.data;
        setClientSecret(clientSecret);
      })
      .catch((err) => console.log(err));
  }, [totalPayement, user?.email]);

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
