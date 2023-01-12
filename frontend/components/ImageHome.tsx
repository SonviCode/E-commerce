/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const dataImg = [
  {
    name: "Chausssures",
    url: "/shoes.jpg",
    width: 800,
    height: 800,
  },
  {
    name: "Habits",
    url: "/clothes.jpg",
    width: 800,
    height: 800,
  },
  {
    name: "Accessoires",
    url: "/items.jpg",
    width: 800,
    height: 800,
  },
];

const ImageHome = () => {
  return (
    <div className="px-5 max-w-7xl mx-auto">
      <h2 className="uppercase after:block after:absolute after:w-40 after:h-1 after:bg-red-500 after:rounded-md pl-[5%] mt-20">
        L'essentiel
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap p-5 gap-5  ">
        {dataImg.map((el, index) => (
          <div
            className="relative overflow-hidden group cursor-pointer w-fit mx-auto rounded-md"
            key={index}
          >
            <h2 className="absolute top-3/4 left-1/2 3translate-y-1/4 -translate-x-1/2 z-10 uppercase bg-white  px-2 sm:p-2 text-smTitle lg:text-xl">
              {el.name}
            </h2>
            <Image
              // layout="responsive"
              src={el.url}
              width={el.width}
              height={el.height}
              alt="une image random d'outdoor"
              className="group-hover:scale-125 duration-300 ease  object-center rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageHome;