import { productsData, productsItem } from "../types/product";
import { Dispatch, SetStateAction } from "react";
import {
  ASCENDING_PRICE,
  DECREASING_PRICE,
  THE_MOST_POPULAR,
  THE_NEWS,
} from "../constants/Constants";
import { ArrayAvg } from "./productUtils";

export const handleSortCategory = (
  name: string,
  setProducts: Dispatch<SetStateAction<productsData>>,
  products: productsData
) => {
  if (name == ASCENDING_PRICE) {
    setProducts(
      [...products].sort(
        (a: productsItem, b: productsItem) => a.price - b.price
      )
    );
  } else if (name == THE_NEWS) {
    setProducts(
      [...products].sort(
        (a: productsItem, b: productsItem) =>
          new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
      )
    );
  } else if (name == DECREASING_PRICE) {
    setProducts(
      [...products].sort(
        (a: productsItem, b: productsItem) => b.price - a.price
      )
    );
  } else if (name == THE_MOST_POPULAR) {
    setProducts(
      [...products].sort(
        (a: productsItem, b: productsItem) =>
          ArrayAvg(b.star) - ArrayAvg(a.star)
      )
    );
  }
};
