/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

type User = {
  id: number;
  name: string;
  firstname: string;
  email: string;
  password: string;
  birthday: Date;
  phonenumber: number;
};

const ConnectModal = () => {
  const [user, setUser] = useState<User[]>([]);
  const [signUp, setSignUp] = useState(true);

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:5000/api/auth/user")
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(user);
  console.log(user.length);

  return user.length > 1 ? (
    user.map((el, i) => {
      return <div key={i}>{el.name}</div>;
    })
  ) : (
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
