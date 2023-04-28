import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { URL_STRIPE_GET_PAYMENT } from "../../constants/Constants";

const Completion = () => {
  const router = useRouter();

  useEffect(() => {
    router.query.payment_intent &&
      axios
        .get(URL_STRIPE_GET_PAYMENT + router.query.payment_intent)
        .then(async (res) => {
          console.log(await res.data);
        })
        .catch((err) => console.log(err));
  }, [router.query.payment_intent]);

  return (
    <div>
      <h1>Félicitation, le payement est réussi !</h1>
    </div>
  );
};

export default Completion;
