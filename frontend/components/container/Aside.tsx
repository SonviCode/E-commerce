import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.png";
import { COMPANY_NAME } from "../../constants/Constants";

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
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <Image src={logo} width={60} height={60} alt="logo" />
          <h1 className="text-xl">{COMPANY_NAME}</h1>
        </div>
        <i
          onClick={() => closeAside()}
          className="fa-solid fa-xmark cursor-pointer text-2xl"
        ></i>
      </div>
    </div>
  );
};

export default Aside;
