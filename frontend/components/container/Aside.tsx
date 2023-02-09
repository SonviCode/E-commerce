import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.png";
import { COMPANY_NAME } from "../../constants/Constants";
import Link from "next/link";

interface Navbar {
  toggleAside: boolean;
  setToggleAside: any;
}

const Aside = ({ toggleAside, setToggleAside }: Navbar) => {
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
          <h1 className="text-xl">{COMPANY_NAME}</h1>
        </div>
        <i
          onClick={() => closeAside()}
          className="fa-solid fa-xmark cursor-pointer text-2xl"
        ></i>
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
      <div className="flex flex-col  ">
        <Link
          href="/category/chaussures"
          className="py-1 pr-10 flex justify-between items-center gap-2 text-xl py-4 hover:bg-gradient-to-r from-white to-gray-200"
        >
          Chaussures<i className="fa-solid fa-chevron-right"></i>
        </Link>
        <Link
          href="/category/habits"
          className="py-1 pr-10 flex justify-between items-center gap-2 text-xl py-4 hover:bg-gradient-to-r from-white to-gray-200"
        >
          Habits
        </Link>
        <Link
          href="/category/accesoires"
          className="py-1 pr-10 flex justify-between items-center gap-2 text-xl py-4 hover:bg-gradient-to-r from-white to-gray-200"
        >
          Accessoires<i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className="flex flex-col gap-5 py-10">
        <Link href="/favoris">
          <i className="fa-regular fa-heart mr-2"></i>Favoris
        </Link>
        <Link href="/account">
          <i className="fa-regular fa-user mr-2"></i>Compte
        </Link>
        <Link href="/panier">
          <i className="fa-solid fa-cart-shopping mr-2"></i>Panier
        </Link>
      </div>
    </div>
  );
};

export default Aside;
