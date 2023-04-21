/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { allCategoryData, allCategoryItem } from "../../types/home";

const CategoryHome = ({
  allCategoryData,
}: {
  allCategoryData: allCategoryData;
}) => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <h2 className="titleHome">
        L'essentiel
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap p-5 gap-5  ">
        {allCategoryData.map(
          (el: allCategoryItem, index: React.Key | null | undefined) => (
            <Link
              href={`/category/${el.name}`}
              className="relative overflow-hidden group cursor-pointer w-fit mx-auto rounded-md shadow-md"
              key={index}
            >
              <h2 className="absolute top-3/4 left-1/2 3translate-y-1/4 -translate-x-1/2 z-10 uppercase bg-white title rounded-md px-2 sm:p-2 text-smTitle lg:text-xl">
                {el.name}
              </h2>
              <Image
                src={el.url}
                width={el.width}
                height={el.height}
                alt={el.name}
                className="group-hover:scale-125 duration-300 ease  object-center rounded-md"
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default CategoryHome;
