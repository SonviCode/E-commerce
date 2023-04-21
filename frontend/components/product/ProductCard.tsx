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
import StarProduct from "../UI/components/StarProduct";

const ProductCard = ({ el }: { el: productsItem }) => {
  const favData: productsItem[] = useSelector(
    (state: any) => state.favoris.value
  );
  const shopData = useSelector((state: any) => state.shop.value);
  const dispatch = useDispatch();

  return (
    <div className="relative  max-w-[350px] cursor-pointer border-gray-200 border-2 rounded-md">
      <div
        onClick={() => toggleHeart(el, favData, dispatch)}
        className="favProduct"
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
            src={el.imageUrl}
            width="800"
            height="800"
            alt={el.name}
            className="group-hover:scale-90 duration-300 ease  object-center p-5 sm:p-10 "
          />
        </div>
        <div className="p-2">
          <div className="sm:flex justify-between items-center">
            <h3 className="text-sm sm:text-base font-bold">{el.name}</h3>
            <span className="text-xs sm:text-sm font-bold pt-0.5">
              {el.price.toFixed(2)}€
            </span>
          </div>
          <div className="text-xs">
            <p className="h-4 truncate">{el.smallDescription}</p>
            <span className="flex flex-row my-2">
              <StarProduct star={el.star} />
              <span className="ml-1">({el.star.length})</span>
            </span>
          </div>
        </div>
      </Link>
      <div className="hidden sm:flex w-fit text-xs p-2">
        <ButtonShop product={el} shopData={shopData}>
          Ajouter au panier
        </ButtonShop>
      </div>
    </div>
  );
};

export default ProductCard;
