import { useRouter } from "next/router";
import React from "react";

const Completion = () => {
  const router = useRouter();

  console.log(router);

  return (
    <div>
      <h1>Félicitation, le payement est réussi !</h1>
    </div>
  );
};

export default Completion;
