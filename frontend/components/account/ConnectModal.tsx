import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const ConnectModal = () => {
    const [signUp, setSignUp] = useState(true);

    return (
        <div className="relative h-full flex justify-center items-center bg-gray-50 max-w-xl mx-auto">
          <div className="border-2 rounded-lg shadow-md p-5  w-full ">
            <div className="flex justify-between flex-wrap gap-x-10">
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
            {signUp ? <SignUp /> : <Login />}
          </div>
        </div>
    );
};

export default ConnectModal;