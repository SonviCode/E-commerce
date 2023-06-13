import { Dispatch, SetStateAction } from "react";
import { User, userAdress } from "./user";
import { productsData } from "./product";

export type indicator = {
  actif: boolean;
  name: string;
};

export type SummaryProps = {
  numberIndicator: indicator[];
  setNumberIndicator: Dispatch<SetStateAction<indicator[]>>;
  isAbleNextStep: boolean;
};

export type Order = {
  createdDate: Date;
  payment: any;
  user: User;
  delivery: Delivery;
  products: productsData;
  _id: string;
};

export type Delivery =
  | {
      deliveryName: string;
      deliveryPrice: number;
      location: userAdress;
    }
  | undefined;

export interface DeliveryState {
  value: Delivery;
}
