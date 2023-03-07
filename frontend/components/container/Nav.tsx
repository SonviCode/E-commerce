import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { COMPANY_NAME } from "../../constants/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import * as fr from "@fortawesome/free-regular-svg-icons";

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
            <FontAwesomeIcon
              onClick={() => openAside()}
              icon={fs.faBars}
              className="text-2xl cursor-pointer lg:hidden"
            />
            <Link href="/">
              <div className="flex items-center">
                <Image src={logo} width={60} height={60} alt="logo" />
                <h1 className="hidden md:block">{COMPANY_NAME}</h1>
              </div>
            </Link>
            {/* {toggleResponsive ? (
              <Link
                href="/category/"
                className="py-1 px-2 flex items-center gap-2 rounded-md"
              >
                Catégories
                <i className="fa-solid fa-chevron-down"></i>
              </Link>
            ) : null} */}
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
            <Link href="/favoris">
              <FontAwesomeIcon icon={fr.faHeart} />
            </Link>
            <Link href="/account">
              <FontAwesomeIcon icon={fr.faUser} className="lg:mr-2"/>
              {toggleResponsive ? "Compte" : null}
            </Link>
            <Link href="/panier">
              <FontAwesomeIcon icon={fs.faCartShopping} className="lg:mr-2" />
              {toggleResponsive ? "Panier" : null}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
