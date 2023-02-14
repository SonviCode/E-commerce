import axios from "axios";
import React from "react";
import { URL_LOGIN } from "../../constants/Constants";

const Login = ({ setLoginStatus }: any) => {
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    const email: string = e.target.elements.email.value;
    const password: string = e.target.elements.password.value;

    if (
      email != null &&
      email.trim() != "" &&
      password != null &&
      password.trim()
    ) {
      axios
        .post(URL_LOGIN, {
          email: email,
          password: password,
        })
        .then((res) => {
          localStorage.setItem("userId", res.data.userId),
            localStorage.setItem("token", `Bearer ${res.data.token}`),
            setLoginStatus(true);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-5 py-10">
      <div>
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          className="w-full border-2 rounded-md p-2"
          type="email"
          id="email"
          required
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor="password" className="font-semibold">
          Mot de passe
        </label>
        <input
          className="w-full border-2 rounded-md p-2"
          type="password"
          id="password"
          required
          placeholder="Mot de passe"
        />
      </div>
      <button className="rounded-md bg-main py-1 px-2 text-white mt-5">
        Se connecter
      </button>
    </form>
  );
};

export default Login;
