import axios from "axios";
import React from "react";
import { productFilter, productsData, toggleFilter } from "../../types/product";
import { capitalize } from "../../utils/productUtils";
import { useEffect, useState } from "react";
import {
  URL_FILTER,
  URL_GET_PRODUCT_BY_CATEGORY,
} from "../../constants/Constants";
import { useRouter } from "next/router";

const Filter = ({ toggleFilter, setToggleFilter, category }: toggleFilter) => {
  const [dataFilter, setDataFilter] = useState<productFilter>();

  const router = useRouter();
  const id = router.query.id;

  console.log(category);

  useEffect(() => {
    axios
      .get<productFilter>(URL_FILTER)
      .then((res) => setDataFilter(res.data))
      .catch((error) => console.log(error));
  }, []);

  const getFilterProduct = (e: any, params: string, key: string) => {
    const checked = e.target.checked;

    checked &&
      axios
        .get<productsData>(URL_GET_PRODUCT_BY_CATEGORY + id, {
          params: { [key]: params },
        })
        .then((res) => (category = res.data))
        .catch((error) => console.log(error));
    
        router.query

    router.replace(router.asPath);

    console.log(router);
    console.log(router.query);
    

  };

  return (
    <div
      className={`flex flex-col py-5 lg:py-0 fixed z-30 bg-white left-0 right-0 lg:relative min-w-[250px] border-x   top-20 lg:top-0 overflow-y-auto scrollbar ease       [1023px]:duration-300 lg:transition-none bottom-0 max-h-full ${
        toggleFilter ? "" : " translate-y-full lg:translate-y-0  "
      }`}
    >
      <h2 className="font-semibold text-2xl p-4">Filtre :</h2>

      <div className="flex flex-col  w-full">
        {dataFilter &&
          dataFilter.map((key, index) => (
            <div
              key={index}
              className=" border-y border-gray-300 w-full text-gray-700 py-1 px-4 flex-col items-center justify-between relative"
            >
              <input
                type="checkbox"
                className="peer absolute left-0 top-0 right-0 h-[32px] peer appearance-none cursor-pointer z-10"
              />

              <div className="flex items-center justify-between ">
                <span>{capitalize(key.name)}</span>{" "}
                <i className="fa-solid fa-chevron-down peer-checked:rotate-180 duration-200 ease pointer-events-none ml-1"></i>
              </div>

              <ul className="peer-checked:flex flex flex-col hidden gap-2 py-2 z-20">
                {key.filterData.map((el: string, index) => (
                  <li className="flex" key={index}>
                    <input
                      onClick={(e) => getFilterProduct(e, el, key.keyRequest)}
                      id={el}
                      type="checkbox"
                      className="cursor-pointer"
                    />
                    <label htmlFor={el} className="grow pl-2 cursor-pointer">
                      {capitalize(el)}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        <div className=" border-y border-gray-300 w-full text-gray-700 py-1 px-4 flex-col items-center justify-between relative">
          <input
            type="checkbox"
            className="peer absolute left-0 top-0 right-0 h-[32px] peer appearance-none cursor-pointer z-10"
          />

          <div className="flex items-center justify-between ">
            <span>Prix</span>{" "}
            <i className="fa-solid fa-chevron-down peer-checked:rotate-180 duration-200 ease pointer-events-none ml-1"></i>
          </div>

          <div className="peer-checked:flex flex-col hidden z-10 w-full py-4">
            <input type="range" className="w-full" />
            <div className="flex justify-between">
              <span>0€</span>
              <span>500€</span>
            </div>
          </div>
        </div>

        <div className="lg:hidden rounded-md bg-main py-1 px-2 text-white  mx-4 mt-5 w-fit text-right">
          <button onClick={() => setToggleFilter(false)}>
            Valider les filtres
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
