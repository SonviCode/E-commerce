import { useState } from "react";

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
      className={`h-full fixed left-0 bg-white top-0 p-5 ease-in-out duration-300 z-50 ${
        toggleAside ? `` : `-translate-x-full`
      }`}
    >
      <div className="flex items-center gap-2 p-2">
        <h1 className="text-2xl">Outdoor Shop</h1>
        <i
          onClick={() => closeAside()}
          className="fa-solid fa-xmark p-2 mt-2 cursor-pointer "
        ></i>
      </div>
    </div>
  );
};

export default Aside;
