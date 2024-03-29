import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { COMPANY_NAME } from "../../constants/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import * as fr from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { productsData } from "../../types/product";
import { RootState } from "../../store/store";

const Nav = () => {
  const [toggleAside, setToggleAside] = useState(false);
  const [toggleResponsive, setToggleResponsive] = useState(true);

  const favData: productsData = useSelector(
    (state: RootState) => state.favoris.value
  );
  const shopData: productsData = useSelector(
    (state: RootState) => state.shop.value
  );

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
      <nav className="px-[5%] py-5 fixed w-full bg-white top-0 z-40 shadow-md">
        <div className="max-w-screen-2xl flex justify-between items-center mx-auto gap-10">
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
                <h1 className="hidden md:block title">{COMPANY_NAME}</h1>
              </div>
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <Link href="/favoris" className="relative">
              <FontAwesomeIcon icon={fr.faHeart} />
              {favData.length > 0 ? (
                <div className="absolute rounded-full text-xs px-1 flex items-center justify-center bg-red-600 top-3 left-2 text-white">
                  {favData.length}
                </div>
              ) : (
                ""
              )}
            </Link>
            <Link href="/account">
              <FontAwesomeIcon icon={fr.faUser} className="lg:mr-2" />
              {toggleResponsive ? "Compte" : null}
            </Link>
            <Link href="/panier" className="relative">
              <FontAwesomeIcon icon={fs.faCartShopping} className="lg:mr-2" />
              {shopData.length > 0 ? (
                <div className="absolute rounded-full text-xs flex items-center justify-center bg-red-600 top-3 left-2 text-white px-1">
                  {shopData.length}
                </div>
              ) : (
                ""
              )}
              {toggleResponsive ? "Panier" : null}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
