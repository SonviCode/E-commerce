/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Favoris from "../favoris/Favoris";
import { productsItem } from "../../types/product";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { ArrayAvg, starInArray } from "../../utils/productUtils";
import ConfirmModal from "../UI/modals/ConfirmModal";
import { changeCounterShop } from "../../utils/shopUtils";
import Historic from "../favoris/Historic";
import { RootState } from "../../store/store";
import StarProduct from "../UI/components/StarProduct";

const ReviewCheckout = () => {
  const shopData = useSelector((state: RootState) => state.shop.value);
  const [confirmNotif, setConfirmNotif] = useState<boolean>(false);
  const [deleteProduct, setDeleteProduct] = useState<productsItem>();

  const dispatch = useDispatch();

  const confirmModalTrigger = (el: productsItem) => {
    setDeleteProduct(el);
    setConfirmNotif(true);
  };

  return (
    <>
      <div className="border rounded-md shadow-md p-5 min-h-[424.22px] relative">
        <h2 className="text-2xl font-bold">
          <i className="fa-solid fa-cart-shopping cursor-pointer mr-5"></i>
          Panier
        </h2>
        {shopData.length > 0 ? (
          <div className="flex flex-col gap-10 py-10">
            {shopData.map((el: productsItem, index: React.Key) => (
              <React.Fragment key={index}>
                {confirmNotif ? (
                  <ConfirmModal
                    product={deleteProduct!}
                    setConfirmNotif={setConfirmNotif}
                  />
                ) : (
                  ""
                )}
                <div className="flex justify-between flex-wrap gap-10">
                  <div className="flex w-[410px] flex-col xs:flex-row gap-10 justify-between">
                    <div className="overflow-hidden group max-w-[200px] rounded-md bg-gray-200 ">
                      <Image
                        src={el.imageUrl}
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
                          <StarProduct star={el.star} />
                          <span className="ml-1">({el.star.length})</span>
                        </span>
                        <span className="text-sm font-bold pt-0.5">
                          {el.price.toFixed(2)}€
                        </span>
                        <p className="py-3">
                          Taille :
                          <span className="text-lg ml-2 border-2 rounded-lg p-2">
                            {el.size}
                          </span>{" "}
                        </p>
                      </div>
                      <Link
                        href={`/product/${el.name}`}
                        className="text-xs w-fit  underline"
                      >
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center justify-between grow flex-wrap gap-y-5">
                    <div className="rounded-lg bg-gray-200 justify-between items-center  flex gap-5 w-[130px] ">
                      <button
                        onClick={() => changeCounterShop(-1, el, dispatch)}
                        className="py-2 pl-4"
                      >
                        -
                      </button>
                      <span className="w-20 text-center">{el.counterShop}</span>
                      <button
                        onClick={() => changeCounterShop(1, el, dispatch)}
                        className="py-2 pr-4"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold w-20 text-center mx-5">
                      {(el.price * el.counterShop).toFixed(2)}€
                    </span>
                    <FontAwesomeIcon
                      icon={fs.faTrash}
                      className="text-gray-200 cursor-pointer"
                      onClick={() => confirmModalTrigger(el)}
                    />
                  </div>
                </div>
                <hr />
              </React.Fragment>
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
      <Historic />
    </>
  );
};

export default ReviewCheckout;
