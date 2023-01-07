import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 p-5 flex flex-col gap-10">
      <div className="flex pl-10 sm:justify-around  gap-y-10 gap-x-20 flex-wrap max-w-7xl xl:mx-auto">
        <div>
          <h2>Outdoor Shop</h2>
        </div>
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
              <i className="fa-solid fa-credit-card"></i> Paiement en plusieurs
              fois
            </li>
            <li>
              <i className="fa-solid fa-certificate"></i> Garantie
            </li>
            <li>
              <i className="fa-solid fa-hand"></i> Service
            </li>
          </ul>
        </div>

        <div className="flex lg:flex-col gap-5 text-3xl">
          <a href="https://www.linkedin.com/in/tom-sonvico/" target="blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/SonviCode" target="blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://twitter.com/SonviCode" target="blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      <p className="text-xs text-center">
        Copyright © {new Date().getFullYear()} SonviCode. All rights reserved.
        Any unauthorized reproduction, modification, distribution or use of this
        content is strictly prohibited.
      </p>
    </footer>
  );
};

export default Footer;
