import axios from "axios";
import { User } from "../types/user";
import { URL_GETUSER, URL_LOGIN } from "../constants/Constants";
import { setUser } from "../store/features/slice/userSlice";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const UserFetching = (
  email: String,
  password: String,
  SetErrorRes: React.Dispatch<React.SetStateAction<string>>,
  dispatch: Dispatch<AnyAction>
) => {
  axios
    .post(URL_LOGIN, {
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem(process.env.NEXT_PUBLIC_USER_ID!, res.data.userId),
        localStorage.setItem(
          process.env.NEXT_PUBLIC_USER_TOKEN!,
          `Bearer ${res.data.token}`
        ),
        checkJwtFromLocalStorage(dispatch);
    })
    .catch((error) => SetErrorRes(error.response.data.message));

  return;
};

export const checkJwtFromLocalStorage = (dispatch: Dispatch<AnyAction>) => {
  axios
    .get<User>(
      URL_GETUSER + localStorage.getItem(process.env.NEXT_PUBLIC_USER_ID!),
      {
        headers: {
          Authorization: localStorage.getItem(
            process.env.NEXT_PUBLIC_USER_TOKEN!
          ),
        },
      }
    )
    .then((res) => {
      delete res?.data?.password;
      dispatch(setUser(res.data));
    })
    .catch(() => {
      localStorage.removeItem(process.env.NEXT_PUBLIC_USER_ID!),
        localStorage.removeItem(process.env.NEXT_PUBLIC_USER_TOKEN!);
    });
};
