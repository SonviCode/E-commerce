import axios from "axios";
import React from "react";
import { URL_GETUSER, URL_LOGIN } from "../../constants/Constants";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/slice/userSlice";
import { User } from "../../types/user";
import { capitalize } from "../../utils/productUtils";

const Login = () =>
  // { setLoginStatus }:  {setLoginStatus : Dispatch<SetStateAction<Boolean>>}
  {
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
        axios
          .post(URL_LOGIN, {
            email: email,
            password: password,
          })
          .then((res) => {
            localStorage.setItem(
              process.env.NEXT_PUBLIC_USER_ID!,
              res.data.userId
            ),
              localStorage.setItem(
                process.env.NEXT_PUBLIC_USER_TOKEN!,
                `Bearer ${res.data.token}`
              ),
              axios
                .get<User>(
                  URL_GETUSER +
                    localStorage.getItem(process.env.NEXT_PUBLIC_USER_ID!),
                  {
                    headers: {
                      Authorization: localStorage.getItem(
                        process.env.NEXT_PUBLIC_USER_TOKEN!
                      ),
                    },
                  }
                )
                .then((res) => {
                  delete res.data.password;
                  dispatch(setUser(res.data));
                })
                .catch(() => localStorage.clear());
          })
          .catch((error) => console.log(error));
      }
    };

    return (
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-5 py-10">
        <></>
        {[
          { name: "email", type: "email" },
          { name: "mot de passe", type: "password" },
        ].map((el: any, index: any) => (
          <div key={index}>
            <label htmlFor={el.type} className="title text-sm">
              {el.name} *
            </label>
            <input
              className="w-full border-2 rounded-md p-2"
              type={el.type}
              id={el.type}
              required
              placeholder={`Saisissez votre ${el.name}`}
            />
          </div>
        ))}
        <button className="rounded-md bg-main py-1 px-2 text-white mt-5">
          Se connecter
        </button>
      </form>
    );
  };

export default Login;
