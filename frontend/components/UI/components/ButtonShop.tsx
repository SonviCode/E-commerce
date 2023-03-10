import React from "react";
import { addToShopCart } from "../../../utils/shopUtils";
import { useDispatch } from "react-redux";
import { productsItem } from "../../../types/product";

const ButtonShop = (props: {
  children: string;
  product: productsItem;
  shopData: productsItem[];
  counter?: number;
}) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        addToShopCart(props.product, dispatch, props.shopData, props.counter)
      }
      className="rounded-lg border-main border-2 items-center py-2 px-4 bg-main hover:text-white w-full"
    >
      {props.children}
    </button>
  );
};

export default ButtonShop;
