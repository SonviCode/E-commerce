/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const ConnectModal = () => {
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="border-2 rounded-md p-5  w-full max-w-[400px]">
      <div className="flex justify-between">
        <button
          className={`underline ${signUp ? `text-main` : `text-gray-300`}`}
          onClick={() => setSignUp(true)}
        >
          S'inscrire
        </button>
        <button
          className={`underline ${signUp ? `text-gray-300` : `text-main`}`}
          onClick={() => setSignUp(false)}
        >
          Se connecter
        </button>
      </div>
      {signUp ? <SignUp /> : <Login />}
    </div>
  );
};

export default ConnectModal;
