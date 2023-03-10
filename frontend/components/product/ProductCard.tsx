import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { starInArray, toggleHeart, ArrayAvg } from "../../utils/productUtils";
import { productsItem } from "../../types/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import * as fr from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import ButtonShop from "../UI/components/ButtonShop";

const ProductCard = ({ el }: { el: productsItem }) => {
  const favData: productsItem[] = useSelector((state: any) => state.fav.value);
  const shopData = useSelector((state: any) => state.shop.value);

  const dispatch = useDispatch();

  return (
    <div className="relative min-w-[220px] cursor-pointer border-gray-200 border-2 rounded-md">
      <div
        onClick={() => toggleHeart(el, favData, dispatch)}
        className="text-sm p-1 rounded-full w-8 h-8 bg-white flex justify-center items-center absolute top-4 right-4 z-10"
      >
        {favData.some((fav: any) => fav.name == el.name) ? (
          <FontAwesomeIcon icon={fs.faHeart} className="text-red-500" />
        ) : (
          <FontAwesomeIcon icon={fr.faHeart} />
        )}
      </div>
      <Link href={`/product/${el.name}`} className="z-0">
        <div className="overflow-hidden group w-fit mx-auto bg-gray-200 ">
          <Image
            src={el.url}
            width="800"
            height="800"
            alt={el.name}
            className="group-hover:scale-90 duration-300 ease  object-center p-10 "
          />
        </div>
        <div className="p-2">
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
                    <FontAwesomeIcon
                      icon={fs.faStar}
                      className="text-gray-200"
                    />
                  )}
                </span>
              ))}
              <span className="ml-1">({el.star.length})</span>
            </span>
          </div>
        </div>
      </Link>
      <div className="w-fit text-xs p-2">
        <ButtonShop product={el} shopData={shopData}>
          Ajouter au panier
        </ButtonShop>
      </div>
    </div>
  );
};

export default ProductCard;
