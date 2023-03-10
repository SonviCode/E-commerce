import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsItem } from "../../types/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import * as fr from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { ArrayAvg, starInArray } from "../../utils/productUtils";
import { removeItem } from "../../utils/shopUtils";
import ButtonShop from "../UI/components/ButtonShop";

const Favoris = () => {
  const favData: productsItem[] = useSelector((state: any) => state.fav.value);
  const shopData = useSelector((state: any) => state.shop.value);

  const dispatch = useDispatch();

  return (
    <div className="border-2 rounded-md px-5 py-10">
      <h2 className="text-2xl font-bold mb-5">
        <Link href="/favoris">
          <FontAwesomeIcon icon={fr.faHeart} className="mr-2" />
        </Link>
        Favoris
      </h2>
      <div className="flex flex-col gap-10">
        {favData.length > 0 ? (
          favData.map((fav: productsItem, index: any) => (
            <div className="flex  justify-between flex-wrap gap-10" key={index}>
              <div className="flex w-[410px] flex-col xs:flex-row gap-10 justify-between">
                <div className="overflow-hidden group max-w-[200px] rounded-md bg-gray-200 ">
                  <Image
                    src={fav.url}
                    width="800"
                    height="800"
                    alt={fav.name}
                    className=" object-center rounded-md p-10 "
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold">{fav.name}</h3>
                    <p>{fav.smallDescription}</p>
                    <span className="flex flex-row my-2">
                      {starInArray(ArrayAvg(fav.star)).map((nb, i) => (
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
                      <span className="ml-1">({fav.star.length})</span>
                    </span>
                    <span className="text-sm font-bold pt-0.5">
                      {fav.price},00€
                    </span>
                    <p className="py-3">
                      Taille :
                      <span className="text-lg ml-2 border-2 rounded-lg p-2">
                        {fav.size}
                      </span>{" "}
                    </p>
                  </div>
                  <Link
                    href={`/product/${fav.name}`}
                    className="text-xs w-fit  underline"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between grow flex-wrap gap-y-5 gap-x-10">
                <div className="flex items-center">
                  <ButtonShop product={fav} shopData={shopData}>Ajouter au panier</ButtonShop>
                </div>
                <div className="flex items-center flex-col sm:flex-row sm:gap-20">
                  <FontAwesomeIcon
                    icon={fs.faHeartCircleXmark}
                    className="text-red-600 text-lg cursor-pointer"
                    onClick={() => removeItem(fav, dispatch)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-2.5 ">
            <p>
              Vous n&apos;avez pas encore de produit(s) favoris. Prenez le temps
              de réfléchir et créez votre liste d&apos;articles favoris.
              Enregistrez-la pour plus tard.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favoris;
