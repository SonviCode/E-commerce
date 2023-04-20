// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { subtotal } from "../../utils/shopUtils";
// import { PaymentElement, Elements  } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

// const initialValues = {
//   name: "",
//   card: "",
//   date: "",
//   cvv: "",
// };
// { deliveryPrice }: { deliveryPrice: number }
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

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
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message!);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  //   const [values, setValues] = useState(initialValues);
  //   const shopData = useSelector((state: any) => state.shop.value);

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //     e.preventDefault();
  //   };

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //     const { name, value } = e.target;
  //     let formatValue: string | string[] = value;
  //     if (name == "cvv" || name == "card") {
  //       formatValue = value.replace(/[^\d]+/g, "");
  //     }

  //     if (name == "date") {
  //       formatValue = value.replace(/[^\d]+/g, "").split("");

  //       formatValue.splice(2, 0, "/");
  //       formatValue.join("").replace(",", "");

  //       console.log(formatValue);
  //     }
  //     console.log(formatValue.toString().replace(",", ""));

  //     setValues({
  //       ...values,
  //       [name]: formatValue,
  //     });
  //   };

  return (
    <form
      className=" h-full min-h-[350px] border shadow-md p-5 rounded-md "
      onSubmit={handleSubmit}
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
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
    // <div>
    //   <div className="flex justify-center items-center">
    //     <Elements stripe={null} >
    //       <PaymentElement id="payment-element" />
    //     </Elements>
    /* <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-100 bg-gray-50 shadow-md p-5 rounded-lg"
        >
          <p className="text-xl title">Détailes de paiement </p>
          <div className="input_text mt-6 relative">
            <label htmlFor="name" className="text-sm ">
              Nom du propriétire
            </label>
            <input
              required
              value={values.name}
              onChange={handleInputChange}
              type="text"
              id="name"
              name="name"
              className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b rounded-lg"
              placeholder="John Row"
            />
            <i className="absolute left-2 top-4 text-gray-400 fa fa-user"></i>
          </div>
          <div className="input_text mt-4 relative">
            <label htmlFor="number" className="text-sm">
              Numéro de carte
            </label>
            <input
              required
              type="text"
              id="number"
              className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b rounded-lg"
              placeholder="0000 0000 0000 0000"
              maxLength={16}
              name="card"
              value={values.card}
              onChange={handleInputChange}
            />
            <i className="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i>
          </div>
          <div className="mt-4 flex gap-5 ">
            <div className="input_text relative w-full">
              <label htmlFor="expiration" className="text-sm ">
                Date d&apos;expiration
              </label>
              <input
                required
                type="text"
                id="expiration"
                name="date"
                className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b rounded-lg"
                placeholder="mm/yyyy"
                maxLength={6}
                value={values.date}
                onChange={handleInputChange}
              />
              <i className="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i>
            </div>
            <div className="input_text relative w-full">
              <label htmlFor="CVV" className="text-sm ">
                CVV
              </label>
              <input
                required
                value={values.cvv}
                onChange={handleInputChange}
                type="text"
                id="CVV"
                name="cvv"
                className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b rounded-lg"
                placeholder="000"
                maxLength={3}
              />
              <i className="absolute left-2 top-4 text-gray-400 fa fa-lock"></i>
            </div>
          </div>
          <div className="flex justify-between gap-10 py-5">
            <p className="text-lg text-center mt-4 text-gray-600 font-semibold">
              <span>{`${(subtotal(shopData) + deliveryPrice).toFixed(
                2
              )}€`}</span>
            </p>
            <button className="rounded-lg border-main border-2 items-center py-2 px-4 bg-main hover:text-white w-40 ">
              Payer
            </button>
          </div>
        </form> */
    //   </div>
    // </div>
  );
};

export default CheckoutForm;
