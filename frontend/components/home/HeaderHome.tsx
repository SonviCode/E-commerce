import Image from "next/image";
import React from "react";
import bg from "../../public/bg.jpg";
import logo from "../../public/logo.png";
import { COMPANY_NAME, TEXT_HOME } from "../../constants/Constants";
import Link from "next/link";

const HeaderHome = () => {
  return (
    <div className=" w-full h-screen max-h-[600px]">
      <div className="relative pt-20 sm:pt-40 z-10 px-5 max-w-7xl mx-auto h-full">
        <div className="flex flex-col sm:px-[20%]">
          <div className="flex items-center flex-col md:flex-row mb-10">
            <Image src={logo} width={120} height={120} alt="logo" />
            <h1 className="uppercase text-5xl sm:text-6xl ">{COMPANY_NAME}</h1>
          </div>
          <p className="text-gray-900 text-sm sm:text-xl">{TEXT_HOME}</p>
        </div>

        {/* <div className="flex w-max gap-20 absolute bottom-10 -translate-x-1/2 left-1/2">
          <Link href="/achat/homme" className="bg-white rounded-md px-2 py-1">
            Homme
          </Link>
          <Link href="/achat/femme" className="bg-white rounded-md px-2 py-1">
            Femme
          </Link>
        </div> */}
      </div>
      <Image
        // layout="fill"
        // objectFit="cover"
        src={bg}
        // width={3696}
        // height={2448}
        alt="montagne"
        className="absolute top-0 left-0 z-0 w-[100%] h-full max-h-[700px] object-cover"
      />
    </div>
  );
};

export default HeaderHome;
