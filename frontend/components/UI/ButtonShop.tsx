import React from "react";
import { addToShopCart } from "../../utils/shopUtils";
import { useDispatch, useSelector } from "react-redux";
import { productsItem } from "../../types/product";

const ButtonShop = (props: {
  children: string;
  product: productsItem;
  counter?: number;
}) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => addToShopCart(props.product, dispatch, props.counter)}
      className="rounded-lg border-main border-2 items-center py-2 px-4 bg-main hover:text-white w-full hover:border-black"
    >
      {props.children}
    </button>
  );
};

export default ButtonShop;
