import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserFetching } from "../../utils/authUser";

const Login = () => {
  const [errorRes, SetErrorRes] = useState<string>("");
  const dispatch = useDispatch();

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
      UserFetching(email, password, SetErrorRes, dispatch);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-5 py-10">
      {[
        { name: "email", type: "email" },
        { name: "mot de passe", type: "password" },
      ].map((el: any, index: any) => (
        <div key={index}>
          <label htmlFor={el.type} className="title text-sm">
            {el.name} <span className="text-main">*</span>
          </label>
          <input
            className="w-full border-2 rounded-md p-2 bg-white"
            type={el.type}
            id={el.type}
            onChange={() => SetErrorRes("")}
            required
            placeholder={`Saisissez votre ${el.name}`}
          />
        </div>
      ))}
      {errorRes.trim() !== "" && (
        <div className="text-red-600 italic">{errorRes} !</div>
      )}
      <button className="rounded-md bg-main py-1 px-2 text-white mt-5">
        Se connecter
      </button>
    </form>
  );
};

export default Login;
