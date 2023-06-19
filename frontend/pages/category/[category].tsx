import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import Filter from "../../components/category/Filter";
import {
  COMPANY_NAME,
  THE_MOST_POPULAR,
  URL_GET_PRODUCT,
} from "../../constants/Constants";
import { productsData, productsItem } from "../../types/product";
import {
  NO_PRODUCT_FOR_FILTER,
  ASCENDING_PRICE,
  THE_NEWS,
  DECREASING_PRICE,
} from "../../constants/Constants";
import { capitalize } from "../../utils/productUtils";
import ProductCard from "../../components/product/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { handleSortCategory } from "../../utils/categoryUtils";
import { GetServerSideProps } from "next";

export default function CategoryId({
  productData,
}: {
  productData: productsData;
}) {
  const [products, setProducts] = useState<productsData>(productData);
  const [toggleFilter, setToggleFilter] = useState<Boolean>(false);

  const effectRan = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (effectRan.current === true) {
      setProducts(productData);
    }

    return () => {
      effectRan.current = true;
    };
  }, [productData]);

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Panier</title>
      </Head>

      <div className="px-5">
        <div className="text-xs md:text-base">
          <p className="italic ">
            <Link href="/">{COMPANY_NAME}</Link> -{" "}
            <Link href="/category">Catégorie</Link> -
            <span className="font-bold"> {capitalize(router.query.category)}</span>
          </p>
        </div>
        <h1 className="text-2xl my-10 text-center title">
          Tous nos produits de la catégorie : {capitalize(router.query.category)}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row overflow-hidden border-t ">
        <Filter
          toggleFilter={toggleFilter}
          setToggleFilter={setToggleFilter}
          setProducts={setProducts}
          productData={productData}
        />
        <div className="grow pt-5">
          <div className="flex flex-wrap gap-x-10 gap-y-5 flex-row-reverse justify-between">
            <div className="relative ">
              <select
                onChange={(e) =>
                  handleSortCategory(e.target.value, setProducts, products)
                }
                className="rounded-md border border-gray-300 appearance-none w-fit bg-white text-gray-700 h-full py-2 px-4 pr-10 leading-tight focus:outline-none focus:border-gray-500 cursor-pointer"
              >
                {[
                  THE_NEWS,
                  ASCENDING_PRICE,
                  DECREASING_PRICE,
                  THE_MOST_POPULAR,
                ].map((el: string, index: any) => (
                  <option key={index}>{el}</option>
                ))}
              </select>
              <FontAwesomeIcon
                icon={fs.faChevronDown}
                className={`duration-200 ease absolute pointer-events-none right-4 top-1/2 -translate-y-1/2`}
              />
            </div>

            <div className="relative lg:hidden">
              <button
                onClick={() => setToggleFilter(true)}
                className="rounded-md border border-gray-300 appearance-none w-fit bg-white text-gray-700 py-2 px-4 pr-14 cursor-pointer "
              >
                Tout les filtres
              </button>
              <FontAwesomeIcon
                icon={fs.faList}
                className="duration-200 ease absolute pointer-events-none right-4 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          {products.length >= 1 ? (
            <div className="containerProducts">
              {products.map((el: productsItem, index: any) => (
                <ProductCard el={el} key={index} />
              ))}
            </div>
          ) : (
            <h2 className="text-center py-28 font-bold">
              {NO_PRODUCT_FOR_FILTER}
            </h2>
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const url: string = context.resolvedUrl;

  const res = await fetch(URL_GET_PRODUCT + url);
  const productData = await res.json();

  return {
    props: {
      productData,
    },
  };
};
