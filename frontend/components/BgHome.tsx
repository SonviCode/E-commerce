import Image from "next/image";
import React from "react";
import bg from "../public/bg.jpg";

const BgHome = () => {
  return (
    <div className="relative w-full h-screen max-h-[600px]">
      <div className="relative pt-40 z-10 px-5 max-w-7xl mx-auto h-full">
        <div className="flex flex-col px-[20%]">
          <h1 className="uppercase text-4xl ">Outdoor Shop</h1>
          <p className="text-gray-900 text-xl">
            Outdoor Shop vous propose la vente en ligne d’équipement pour le ski et pour le snowboard, de streetwear, de matériel et de vêtements pour la montagne.
          </p>
        </div>

        <div className="flex w-max gap-20 absolute bottom-10 -translate-x-1/2 left-1/2">
          <button className="bg-white rounded-md px-2 py-1">Homme</button>
          <button className="bg-white rounded-md px-2 py-1">Femme</button>
        </div>
      </div>
      <Image
        layout="fill"
        objectFit="cover"
        src={bg}
        // width={3696}
        // height={2448}
        alt="montagne"
        className="z-0"
      />
    </div>
  );
};

export default BgHome;
