import React from "react";

const Login = () => {
  return (
    <form className="flex flex-col gap-5 py-10">
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
      <button className="rounded-md bg-main w-max py-1 px-2 text-white ">Se connecter</button>
    </form>
  );
};

export default Login;
