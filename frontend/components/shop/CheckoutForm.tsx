import { AddressElement, PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { UNEXPECTED_ERROR, URL_CREATE_ORDER } from "../../constants/Constants";
import axios from "axios";
import { useRouter } from "next/router";
import { User } from "../../types/user";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { productsData } from "../../types/product";
import { Delivery } from "../../types/shop";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [message, setMessage] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const user: User = useSelector((state: RootState) => state.user.value);
  const shopData: productsData = useSelector(
    (state: RootState) => state.shop.value
  );
  const delivery: Delivery = useSelector((state: RootState) => state.delivery);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/panier/completion`,
      },
      redirect: "if_required",
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message!);
      }
      setMessage(UNEXPECTED_ERROR);
    } else {
      axios
        .post(
          URL_CREATE_ORDER,
          {
            user,
            payment: paymentIntent,
            products: shopData,
            delivery: delivery.value,
          },
          {
            headers: {
              Authorization: localStorage.getItem(
                process.env.NEXT_PUBLIC_USER_TOKEN!
              ),
            },
          }
        )
        .then((res) =>
          router.push({
            pathname: "panier/" + paymentIntent.id,
          })
        )
        .catch((err) => console.log(err));
    }

    setIsProcessing(false);
  };

  return (
    <form
      className={`${
        message && "border-red-600"
      } h-full min-h-[350px] border shadow-md p-5 rounded-md `}
      onSubmit={(e) => handleSubmit(e)}
    >
      <PaymentElement id="payment-element" />
      <button
        className="bg-main shadow-md rounded-md p-2 text-white font-semibold mt-5 transition-all ease duration-200  active:scale-90 disabled:opacity-50 disabled:cursor-none"
        disabled={isProcessing || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      <div className="italic text-xl text-center text-red-600">{message}</div>
    </form>
  );
};

export default CheckoutForm;
