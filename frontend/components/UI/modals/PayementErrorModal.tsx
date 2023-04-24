import React, { useState, useEffect, Dispatch, SetStateAction } from "react";

const PayementErrorModal = ({
  errorMsg,
  setToggleModalError,
}: {
  errorMsg: string;
  setToggleModalError: Dispatch<SetStateAction<boolean>>;
}) => {
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setLoad(true);

    setTimeout(() => {
      setToggleModalError(false);
    }, 4000);
  }, [setToggleModalError]);

  return (
    <div
      className={`${
        load ? "translate-y-20" : ""
      } ease duration-300 fixed shadow-md rounded-lg top-8 right-1/2 translate-x-1/2 p-10 border-2 bg-white z-20`}
    >
      <h2>Oups ... <br/> {errorMsg}</h2>
    </div>
  );
};

export default PayementErrorModal;
