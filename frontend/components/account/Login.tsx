import axios from "axios";
import React from "react";

const Login = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const email: string = e.target.elements.email.value;
    const password: string = e.target.elements.password.value;

    console.log(email, password);
    if (
      email != null &&
      email.trim() != "" &&
      password != null &&
      password.trim()
    ) {
      axios
        .post("http://localhost:5000/api/auth/signup", { email, password })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-5 py-10">
      <div>
        <label htmlFor="email" className="font-bold">
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
        <label htmlFor="password" className="font-bold">
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
      <button className="rounded-md bg-main w-max py-1 px-2 text-white ">
        Se connecter
      </button>
    </form>
  );
};

export default Login;
