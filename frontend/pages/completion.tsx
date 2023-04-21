import { useRouter } from "next/router";
import React from "react";

const Completion = () => {
  const router = useRouter();

  console.log(router);

  return <div>test</div>;
};

export default Completion;
