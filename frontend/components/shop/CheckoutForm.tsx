import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { UNEXPECTED_ERROR } from "../../constants/Constants";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  // const [toggleModalError, setToggleModalError] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/panier/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      console.log(error);

      setMessage(error.message!);
    } else {
      setMessage(UNEXPECTED_ERROR);
    }
    // setToggleModalError(true);
    setIsProcessing(false);
  };

  return (
    <form
      className={`${message && "border-red-600"} h-full min-h-[350px] border shadow-md p-5 rounded-md `}
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
      {/* {toggleModalError && (
        <PayementErrorModal
          errorMsg={message}
          setToggleModalError={setToggleModalError}
        />
      )} */}
      <div className="italic text-xl text-center text-red-600">{message}</div>
    </form>
  );
};

export default CheckoutForm;

// const { error, paymentIntent } = await stripe.confirmPayment({
//   elements,
//   confirmParams: {
//     // Make sure to change this to your payment completion page
//     return_url: `${window.location.origin}/`,
//   },
//   redirect: "if_required",
// });

// if (error) {
//   console.log(error);

//   setMessage(error.message!);
// } else if (paymentIntent && paymentIntent.status === "succeeded") {
//   console.log(paymentIntent);

//   setMessage("Payement réussi");
// } else {
//   setMessage(UNEXPECTED_ERROR);
// }
