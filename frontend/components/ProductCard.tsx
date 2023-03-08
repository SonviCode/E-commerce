import Image from "next/image";
import Link from "next/link";
import React from "react";
import { starInArray, toggleHeart, ArrayAvg } from "../utils/productUtils";
import {  productsItem } from "../types/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ProductCard = ({ el }: { el: productsItem }) => {
  const [fav, setFav] = useState<productsItem[]>([]);

  useEffect(() => {
    setFav(JSON.parse(localStorage.getItem("favoris")!));
  }, []);

  return (
    <div className="relative min-w-[220px] cursor-pointer">
      <div
        onClick={() => toggleHeart(el)}
        className="text-sm p-1 rounded-full w-8 h-8 bg-white flex justify-center items-center absolute top-4 right-4 z-10"
      >
        {/* {fav[0] && fav.some((fav) => fav.name === el.name) ? (
          <FontAwesomeIcon icon={fs.faHeart} className="text-red-500" />
        ) : (
          <FontAwesomeIcon icon={fr.faHeart} />
        )} */}
      </div>
      <Link href={`/product/${el.name}`} className="z-0">
        <div className="overflow-hidden group w-fit mx-auto rounded-md bg-gray-200 ">
          <Image
            src={el.url}
            width="800"
            height="800"
            alt={el.name}
            className="group-hover:scale-75 duration-300 ease  object-center rounded-md p-10 "
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-base font-bold">{el.name}</h3>
          <span className="text-sm font-bold pt-0.5">{el.price},00€</span>
        </div>
        <div className="text-xs">
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
                  <FontAwesomeIcon icon={fs.faStar} className="text-gray-200" />
                )}
              </span>
            ))}
            <span className="ml-1">({el.star.length})</span>
          </span>
        </div>
        <button className="rounded-md text-xs border-solid border-gray-600 border-2 py-1 px-2 hover:bg-main hover:border-main hover:text-white duration-300 ease-in hover:scale-90">
          En savoir plus
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
