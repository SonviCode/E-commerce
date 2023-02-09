import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { COMPANY_NAME } from "../../constants/Constants";

const Nav = () => {
  const [toggleAside, setToggleAside] = useState(false);
  const [toggleResponsive, setToggleResponsive] = useState(true);
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setToggleResponsive(true);
    } else {
      setToggleResponsive(false);
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setToggleResponsive(true);
      } else {
        setToggleResponsive(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openAside = () => {
    setToggleAside(true);
  };

  return (
    <header>
      <nav className="px-[5%] py-5 fixed z-10 w-full bg-white top-0 z-40 shadow-md">
        <div className="max-w-7xl flex justify-between items-center mx-auto gap-10">
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
            {toggleResponsive ? (
              <Link
                href="/category/"
                className="py-1 px-2 flex items-center gap-2 rounded-md"
              >
                Catégories
                <i className="fa-solid fa-chevron-down"></i>
              </Link>
            ) : null}
          </div>
          <div className="flex flex-1">
            <form className="hidden sm:flex bg-gray-100 py-2 px-4 rounded-md w-full">
              <input
                className="w-full bg-gray-100  outline-none"
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
              <i className="fa-regular fa-heart"></i>
            </Link>
            <Link href="/account">
              <i className="fa-regular fa-user  lg:mr-2"></i>
              {toggleResponsive ? "Compte" : null}
            </Link>
            <Link href="/panier">
              <i className="fa-solid fa-cart-shopping lg:mr-2"></i>
              {toggleResponsive ? "Panier" : null}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
