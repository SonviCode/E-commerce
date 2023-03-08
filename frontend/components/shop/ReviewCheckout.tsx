/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Favoris from "./Favoris";
import { productsItem } from "../../types/product";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { ArrayAvg, changeCounter, starInArray } from "../../utils/productUtils";

const ReviewCheckout = () => {
  const shopData = useSelector((state: any) => state.shop.value);
  const [counter, setCounter] = useState<number>(1);

  return (
    <>
      <div className="border-2 rounded-md p-5 min-h-[424.22px] relative">
        <h2 className="text-2xl font-bold">
          <i className="fa-solid fa-cart-shopping cursor-pointer mr-5"></i>
          Panier
        </h2>
        {shopData.length > 0 ? (
          <div className="flex flex-col gap-10 py-10">
            {shopData.map((el: productsItem, index: any) => (
              <div className="flex justify-between" key={index}>
                <div className="flex gap-10">
                  <div className="overflow-hidden group max-w-[200px] rounded-md bg-gray-200 ">
                    <Image
                      src={el.url}
                      width="800"
                      height="800"
                      alt={el.name}
                      className=" object-center rounded-md p-10 "
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold">{el.name}</h3>
                      <p>{el.smallDescription}</p>
                      <span className="flex flex-row my-2">
                        {starInArray(ArrayAvg(el.star)).map((nb, i) => (
                          <span key={i}>
                            {nb == 1 ? (
                              <FontAwesomeIcon
                                icon={fs.faStar}
                                className="text-yellow-300"
                              />
                            ) : nb == 5 ? (
                              <FontAwesomeIcon
                                icon={fs.faStarHalfStroke}
                                className="text-yellow-300"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={fs.faStar}
                                className="text-gray-200"
                              />
                            )}
                          </span>
                        ))}
                        <span className="ml-1">({el.star.length})</span>
                      </span>
                      <span className="text-sm font-bold pt-0.5">
                        {el.price},00€
                      </span>
                    </div>
                    <button className="text-xs py-1 px-2 underline">
                      En savoir plus
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-20">
                  <div className="rounded-lg bg-gray-200 justify-between items-center w-fit flex gap-5 w-[120px] ">
                    <button
                      onClick={() => changeCounter(-1, counter, setCounter)}
                      className="py-2 pl-4"
                    >
                      -
                    </button>
                    <span>{counter}</span>
                    <button
                      onClick={() => changeCounter(1, counter, setCounter)}
                      className="py-2 pr-4"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-bold">
                    {/* {shopData.length > 0 ? `${subtotal(shopData)}€` : "0€"} */}
                    {el.price},00€
                  </span>
                  <FontAwesomeIcon
                    icon={fs.faTrash}
                    className="text-gray-200 cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2>Votre panier est vide </h2>
            <p>Continuez vos achats</p>
            <Link href="/" className="rounded-md px-3 py-2 bg-gray-200 w-max">
              <i className="fa-solid fa-angle-left mr-2"></i>Continuer mes
              achats
            </Link>
          </div>
        )}
      </div>

      <Favoris />
      <div className="border-2 rounded-md px-5 py-10 overflow-hidden">
        <h2 className="text-2xl font-bold mb-5">Historique</h2>
      </div>
    </>
  );
};

export default ReviewCheckout;
