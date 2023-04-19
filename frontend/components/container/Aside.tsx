import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.png";
import { COMPANY_NAME } from "../../constants/Constants";
import Link from "next/link";
import { capitalize } from "../../utils/productUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import * as fr from "@fortawesome/free-regular-svg-icons";
import { productsItem } from "../../types/product";
import { useSelector } from "react-redux";
import Favoris from "../favoris/Favoris";

interface Navbar {
  toggleAside: boolean;
  setToggleAside: any;
}

const Aside = ({ toggleAside, setToggleAside }: Navbar) => {
  const favData: productsItem[] = useSelector((state: any) => state.favoris.value);
  const shopData: productsItem[] = useSelector(
    (state: any) => state.shop.value
  );

  const closeAside = () => {
    setToggleAside(false);
  };

  return (
    <div
      className={`h-full fixed left-0 bg-white top-0 p-5 ease-in-out duration-300 z-50 w-[80%] shadow-2xl min-w-[320px] ${
        toggleAside ? `` : `-translate-x-full`
      }`}
    >
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center">
          <Image src={logo} width={60} height={60} alt="logo" />
          <h1 className="text-xl title">{COMPANY_NAME}</h1>
        </div>
        <FontAwesomeIcon
          onClick={() => closeAside()}
          icon={fs.faXmark}
          className="cursor-pointer text-2xl"
        />
      </div>
      <form className="flex bg-gray-100 py-2 px-4 rounded-md w-full mb-10">
        <input
          className="w-full bg-gray-100  outline-none"
          type="text"
          placeholder="Rechercher"
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className="flex flex-col ">
        <Link
          onClick={() => closeAside()}
          href="/category"
          className="pr-10 flex justify-between items-center gap-2 text-xl py-4 title"
        >
          Catégories :
        </Link>
        {new Array("chaussures", "habits", "accessoires").map(
          (el: string, index) => (
            <Link
              onClick={() => closeAside()}
              key={index}
              href={`/category/${el}`}
              className="pr-10 flex justify-between items-center gap-2 text-xl py-4 hover:bg-gradient-to-r from-white to-gray-200"
            >
              {capitalize(el)}
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          )
        )}
      </div>
      <div className="flex flex-col gap-5 py-10">
        <Link onClick={() => closeAside()} href="/favoris" className="relative">
          <FontAwesomeIcon icon={fr.faHeart} className="mr-2" />
          {favData.length > 0 ? (
            <div className="absolute rounded-full text-xs px-1 flex items-center justify-center bg-red-600 top-3 left-2 text-white">
              {favData.length}
            </div>
          ) : (
            ""
          )}
          Favoris
        </Link>
        <Link onClick={() => closeAside()} href="/account">
          <FontAwesomeIcon icon={fr.faUser} className="mr-2" />
          Compte
        </Link>
        <Link onClick={() => closeAside()} href="/panier" className="relative">
          <FontAwesomeIcon icon={fs.faCartShopping} className="mr-2" />
          {shopData.length > 0 ? (
            <div className="absolute rounded-full text-xs flex items-center justify-center bg-red-600 top-3 left-2 text-white px-1">
              {shopData.length}
            </div>
          ) : (
            ""
          )}
          Panier
        </Link>
      </div>
    </div>
  );
};

export default Aside;
