import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { COMPANY_NAME } from "../../constants/Constants";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 p-5 flex flex-col gap-10">
      <div className="flex pl-10 md:justify-around  gap-y-10 gap-x-20 flex-wrap max-w-screen-2xl xl:mx-auto">
        <div>
          <Link href="/">
            <div className="flex items-center">
              <Image src={logo} width={60} height={60} alt="logo" />
              <h1>{COMPANY_NAME}</h1>
            </div>
          </Link>
        </div>
        <div className="flex gap-x-20 gap-y-10 flex-wrap">
          <div>
            <h2 className="text-xl mb-2">Paiement sécurisé</h2>
            <ul className="flex flex-col mb-5">
              <li className="flex gap-3 text-xl">
                <i className="fa-brands fa-paypal"></i>
                <i className="fa-brands fa-google-pay"></i>
                <i className="fa-brands fa-cc-visa"></i>
                <i className="fa-brands fa-cc-mastercard"></i>
              </li>
            </ul>
            <h2 className="text-xl mb-2">Nos magasins</h2>
            <ul className="flex flex-col">
              <li className="flex gap-3 text-xl">
                <i className="fa-solid fa-store"></i>
                <i className="fa-solid fa-location-dot"></i>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl">A propos</h2>
            <ul className="flex flex-col ">
              <li>
                <i className="fa-solid fa-truck-fast"></i> Livraison offerte
              </li>
              <li>
                <i className="fa-solid fa-rotate-left"></i> Retour gratuit
              </li>
              <li>
                <i className="fa-solid fa-credit-card"></i> Paiement en
                plusieurs fois
              </li>
              <li>
                <i className="fa-solid fa-certificate"></i> Garantie
              </li>
              <li>
                <i className="fa-solid fa-hand"></i> Service
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center gap-5 text-3xl">
        <a href="https://www.linkedin.com/in/tom-sonvico/" target="blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/SonviCode" target="blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://twitter.com/SonviCode" target="blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div> */}
      <p className="text-xs text-center">
        Copyright © {new Date().getFullYear()} SonviCode. All rights reserved.
        Any unauthorized reproduction, modification, distribution or use of this
        content is strictly prohibited.
      </p>
    </footer>
  );
};

export default Footer;
