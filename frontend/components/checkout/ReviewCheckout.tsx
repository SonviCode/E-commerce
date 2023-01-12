import Link from "next/link";
import React from "react";

const ReviewCheckout = () => {
  return (
    <div className="border-2 rounded-md p-5 h-full relative">
      <h1 className="text-2xl font-bold">Panier</h1>
      <div className="flex flex-col gap-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2>Votre panier est vide </h2>
        <p>Continuez vos achats</p>
        <Link href="/" className="rounded-md px-3 py-2 bg-gray-200 w-max">
          <i className="fa-solid fa-angle-left mr-2"></i>Continuer mes achats
        </Link>
      </div>
    </div>
  );
};

export default ReviewCheckout;
