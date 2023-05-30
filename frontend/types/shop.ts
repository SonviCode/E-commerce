import { Dispatch, SetStateAction } from "react";
import { User } from "./user";
import { productsData } from "./product";

export type indicator = {
  actif: boolean;
  name: string;
};

export type SummaryProps = {
  numberIndicator: indicator[];
  setNumberIndicator: Dispatch<SetStateAction<indicator[]>>;
  isAbleNextStep: boolean;
  deliveryPrice: number;
};

export type Order = {
  createdDate: Date;
  payment: any;
  user: User;
  products: productsData;
  _id: string;
};
