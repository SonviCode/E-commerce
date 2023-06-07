import React from "react";
import { productsItem } from "../../types/product";
import Image from "next/image";
import StarProduct from "../UI/components/StarProduct";

const OrderListContent = ({ el }: { el: productsItem }) => {
  return (
    <>
      <div className="flex justify-between flex-wrap gap-10">
        <div className="overflow-hidden h-fit group max-w-[100px] rounded-md bg-gray-200 ">
          <Image
            src={el.imageUrl}
            width="800"
            height="800"
            alt={el.name}
            className=" object-center rounded-md p-2"
          />
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex flex-col justify-between w-[138px]">
            <div>
              <h3 className="text-sm font-bold ">{el.name}</h3>
              <p className="text-sm truncate">{el.smallDescription}</p>
              <span className="flex flex-row my-2">
                <StarProduct star={el.star} />
                <span className="ml-1">({el.star.length})</span>
              </span>
              <div className="flex gap-4 items-center">
                <span className="text-xs font-bold ">
                  {el.price.toFixed(2)}€
                </span>
                <p className="text-xs">
                  Taille :<span className="ml-2">{el.size}</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <span>X {el.counterShop}</span>
        </div>
        <div className="flex items-center">
          <span className=" w-20 text-center mx-5">
            {(el.price * el.counterShop).toFixed(2)}€
          </span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default OrderListContent;
