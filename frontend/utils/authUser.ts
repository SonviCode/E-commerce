import axios from "axios";
import { User } from "../types/user";
import { URL_GETUSER, URL_LOGIN } from "../constants/Constants";
import { setUser } from "../store/features/slice/userSlice";

export const UserFetching = (
  email: any,
  password: any,
  SetErrorRes: any,
  dispatch: any
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

export const checkJwtFromLocalStorage = (dispatch: any) => {
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
      delete res.data.password;
      dispatch(setUser(res.data));
    })
    .catch(() => localStorage.clear());
};
