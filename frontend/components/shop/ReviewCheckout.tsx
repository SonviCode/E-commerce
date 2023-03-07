/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import Favoris from "./Favoris";

const ReviewCheckout = () => {

 

  return (
    <>
      <div className="border-2 rounded-md p-5 min-h-[424.22px] relative">
        <h2 className="text-2xl font-bold">
          <i className="fa-solid fa-cart-shopping cursor-pointer mr-5"></i>
          Panier
        </h2>
        <div className="flex flex-col gap-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2>Votre panier est vide </h2>
          <p>Continuez vos achats</p>
          <Link href="/" className="rounded-md px-3 py-2 bg-gray-200 w-max">
            <i className="fa-solid fa-angle-left mr-2"></i>Continuer mes achats
          </Link>
        </div>
      </div>

      <Favoris />
      <div className="border-2 rounded-md px-5 py-10 overflow-hidden">
        <h2 className="text-2xl font-bold mb-5">Historique</h2>
        
      </div>
    </>
  );
};

export default ReviewCheckout;
