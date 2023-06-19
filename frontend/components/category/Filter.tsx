import axios from "axios";
import React, { MouseEvent } from "react";
import { productFilter, toggleFilter } from "../../types/product";
import { capitalize } from "../../utils/productUtils";
import { useEffect, useState } from "react";
import { URL_FILTER } from "../../constants/Constants";
import { useRouter } from "next/router";
import { handleChangePrice } from "../../utils/productUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";

const Filter = ({
  toggleFilter,
  setToggleFilter,
  setProducts,
  productData,
}: toggleFilter) => {
  const [dataFilter, setDataFilter] = useState<productFilter>();
  const [arrayFilter, setArrayFilter] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    axios
      .get<productFilter>(URL_FILTER)
      .then((res) => setDataFilter(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    router.push({
      pathname: router.query.category!.toString(),
      query: arrayFilter.join("&"),
    });
  }, [arrayFilter]);

  const getFilterProduct = (e: MouseEvent, params: string, key: string) => {
    const checked = e.target as HTMLInputElement;

    let filteredArray = arrayFilter.filter(
      (item) => item !== `${key}=${params}`
    );

    checked.checked
      ? setArrayFilter((curr) => [...curr, `${key}=${params}`])
      : setArrayFilter(filteredArray);
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
                className="peer absolute left-0 top-0 right-0 h-[32px] appearance-none cursor-pointer z-10"
              />
              <div className="peer-checked:[&>svg]:rotate-180 flex items-center justify-between ">
                <span>{capitalize(key.name)}</span>{" "}
                <FontAwesomeIcon
                  icon={fs.faChevronDown}
                  className="duration-200 ease pointer-events-none ml-1"
                />
              </div>

              <ul className="peer-checked:flex flex-col hidden gap-2 py-2 z-20">
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

          <div className="peer-checked:[&>svg]:rotate-180 flex items-center justify-between ">
            <span>Prix</span>{" "}
            <FontAwesomeIcon
              icon={fs.faChevronDown}
              className="duration-200 ease pointer-events-none ml-1"
            />
          </div>

          <div className="peer-checked:flex flex-col hidden z-10 w-full py-4">
            <input
              type="range"
              defaultValue="50"
              className="w-full"
              onChange={(e) =>
                handleChangePrice(e.target.value, productData, setProducts)
              }
            />
            <div className="flex justify-between">
              <span>0€</span>
              <span>150€</span>
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
