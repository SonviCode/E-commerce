import { Dispatch } from "@reduxjs/toolkit";
import { SetStateAction } from "react";
import { removeUser } from "../store/features/slice/userSlice";

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
