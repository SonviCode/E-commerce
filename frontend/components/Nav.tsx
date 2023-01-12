import React from "react";
import Aside from "./Aside";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import { COMPANY_NAME } from "../constants/Constants";

const Nav = () => {
  const [toggleAside, setToggleAside] = useState(false);

  const openAside = () => {
    setToggleAside(true);
  };

  return (
    <header>
      <nav className="px-[5%] py-5 fixed z-10 w-full bg-white top-0 z-40 shadow-md">
        <div className="max-w-7xl flex justify-between items-center mx-auto">
          <Aside toggleAside={toggleAside} setToggleAside={setToggleAside} />
          <div className="flex items-center gap-5">
            <i
              onClick={() => openAside()}
              className="block fa-solid fa-bars text-2xl cursor-pointer lg:hidden"
            ></i>
            <Link href="/">
              <div className="flex items-center">
                <Image src={logo} width={60} height={60} alt="logo" />
                <h1 className="hidden md:block">{COMPANY_NAME}</h1>
              </div>
            </Link>
          </div>
          <div className="flex ">
            <form className="hidden sm:flex bg-gray-100 py-2 px-4 rounded-md ">
              {/* <p className="bg-white py-1 px-2 flex items-center gap-2 rounded-md">
                Catégories
                <i className="fa-solid fa-chevron-down"></i>
              </p> */}
              <input
                className="pl-5 bg-gray-100  outline-none"
                type="text"
                placeholder="Rechercher"
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="flex gap-5 items-center">
            {/* <form className="relative flex p-2 ">
            <span className="sr-only">Basculer</span>
            <input
              type="checkbox"
              className="absolute left-0 top-0 w-full h-full peer appearance-none z-10 cursor-pointer"
            />
            <span className="bg-gray-300 w-11 h-7 rounded-full flex items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1 peer-checked:bg-white peer-checked:after:bg-gray-300 peer-checked:after:translate-x-4 ease-in-out duration-300 after:duration-300 "></span>
          </form> */}
            <Link href="/favoris">
              <i className="fa-regular fa-heart cursor-pointer"></i>
            </Link>
            <i className="fa-regular fa-user cursor-pointer"></i>
            <Link href="/panier">
              <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
