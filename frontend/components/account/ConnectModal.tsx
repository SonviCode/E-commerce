import React, { useEffect, useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import UserAccount from "./UserAccount";

const ConnectModal = () => {
  const [signUp, setSignUp] = useState(true);
  const [loginStatus, setLoginStatus] = useState<Boolean>(false);

  useEffect(() => {
    if (
      localStorage.getItem("userId") &&
      localStorage.getItem("token") &&
      localStorage.getItem("userData")
    ) {
      setLoginStatus(true);
    }
  }, []);

  return (
    <>
      {loginStatus ? (
        <UserAccount />
      ) : (
        <div className="relative h-full flex justify-center items-center py-10">
          <div className="border-2 rounded-lg p-5  w-full max-w-[400px]">
            <div className="flex justify-between">
              <button
                className={`underline ${
                  signUp ? `text-main` : `text-gray-300`
                }`}
                onClick={() => setSignUp(true)}
              >
                S&apos;inscrire
              </button>
              <button
                className={`underline ${
                  signUp ? `text-gray-300` : `text-main`
                }`}
                onClick={() => setSignUp(false)}
              >
                Se connecter
              </button>
            </div>
            {signUp ? <SignUp /> : <Login setLoginStatus={setLoginStatus} />}
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectModal;
