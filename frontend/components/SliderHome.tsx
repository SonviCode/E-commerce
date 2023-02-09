import Image from "next/image";
import Link from "next/link";
import React from "react";
import { productsData, productsItem } from "../types/product";
import { ArrayAvg, starInArray, toggleHeart } from "../utils/productUtils";
import { useEffect, useState } from "react";
import axios from "axios";

const SliderHome = () => {
  const [products, setProducts] = useState<productsData>([]);

  useEffect(() => {
    axios
      .get<productsData>("http://localhost:5000/api/product")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex py-5 gap-5  overflow-hidden">
      {products.map((el: productsItem, index: React.Key | null | undefined) => (
        <Link
          href={`/product/${el.name}`}
          key={index}
          className="min-w-[220px] cursor-pointer"
        >
          <div className="relative overflow-hidden group w-fit mx-auto rounded-md bg-gray-200 ">
            <i
              onClick={() => toggleHeart(el)}
              className={` text-sm p-1 rounded-full w-8 h-8 bg-white flex justify-center items-center absolute top-4 right-4 z-10  ${
                el.like === true
                  ? `fa-solid fa-heart text-red-500`
                  : `fa-regular fa-heart `
              }`}
            ></i>
            <Image
              src={el.url}
              width="800"
              height="800"
              alt={el.name}
              className="group-hover:scale-75 duration-300 ease  object-center rounded-md p-10"
            />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-base font-bold">{el.name}</h3>
            <span className="text-sm font-bold pt-0.5">{el.price},00€</span>
          </div>
          <div className="text-xs">
            <p>{el.smallDescription}</p>
            <span>
              <>
                {starInArray(ArrayAvg(el.star)).map((nb, i) => (
                  <i
                    key={i}
                    className={`${
                      nb == 1
                        ? `fa-solid fa-star text-yellow-300`
                        : nb == 5
                        ? `fa-solid fa-star-half-stroke text-yellow-300`
                        : `fa-solid fa-star text-gray-200`
                    }`}
                  ></i>
                ))}
              </>
            </span>
            <span>({el.star.length})</span>
          </div>
          <button className="rounded-md text-xs border-solid border-gray-600 border-2 py-1 px-2 hover:bg-main hover:border-main hover:text-white duration-300 ease-in hover:scale-90">
            En savoir plus
          </button>
        </Link>
      ))}
    </div>
  );
};

export default SliderHome;
