import { Dispatch } from "@reduxjs/toolkit";
import { SetStateAction } from "react";
import { removeUser } from "../store/features/slice/userSlice";
import { User } from "../types/user";

export const formatNumberPhone = (number: number) => {
  const numberInString = number + "";

  const formatPhone = numberInString
    .replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3-$4-$5")
    .split("-")

  return formatPhone;
};

export const logout = (dispatch: any) => {
  localStorage.removeItem(process.env.NEXT_PUBLIC_USER_ID!);
  localStorage.removeItem(process.env.NEXT_PUBLIC_USER_TOKEN!);
  dispatch(removeUser());
};

export const inputAdresseValue = (el: any, user:User) => {
  let result: any;

  user &&
    Object.entries(user.location).forEach((item: any) => {
      const [key, value] = item;

      if (key == el.id) {
        result = value;
      }
      return;
    });
  return result;
};

