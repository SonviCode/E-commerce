import { Dispatch, SetStateAction } from "react";

export type productsData = {
  name: string;
  url: string;
  _id: string;
  like: boolean;
  price: number;
  category: string;
  sex: string;
  smallDescription: string;
  bigDescription: string;
  type: string;
  star: number[];
  comments: string[];
  sport: string;
  size: string;
}[];

export type productsItem = {
  sport: string;
  name: string;
  url: string;
  _id: string;
  price: number;
  like: boolean;
  category: string;
  sex: string;
  smallDescription: string;
  bigDescription: string;
  type: string;
  star: number[];
  comments: string[];
  size: string;
};

export type productComment = {
  name: string;
  firstname: string;
  date: Date;
  description: string;
  title: string;
  star: number;
};

export type productFilter = {
  name: string;
  keyRequest: string;
  filterData: string[];
}[];

export type toggleFilter = {
  toggleFilter: Boolean;
  setToggleFilter: any;
  setProducts: Dispatch<SetStateAction<productsData>>;
  productData: productsData;
};
