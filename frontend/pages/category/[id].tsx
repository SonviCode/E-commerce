import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Filter from "../../components/category/Filter";
import {
  COMPANY_NAME,
  THE_MOST_POPULAR,
  URL_GET_PRODUCT,
  URL_GET_PRODUCT_BY_CATEGORY,
} from "../../constants/Constants";
import { productsData, productsItem } from "../../types/product";
import { queryFormat } from "../../utils/fetchData";
import {
  NO_PRODUCT_FOR_FILTER,
  ASCENDING_PRICE,
  THE_NEWS,
  DECREASING_PRICE,
} from "../../constants/Constants";
import {
  ArrayAvg,
  ascendingPrice,
  capitalize,
  decreasingPrice,
  starInArray,
  toggleHeart,
} from "../../utils/productUtils";
import ProductCard from "../../components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

export default function Home({ productData }: { productData: productsData }) {
  const [products, setProducts] = useState<productsData>(productData);
  const [toggleFilter, setToggleFilter] = useState<Boolean>(false);
  const [sort, setSort] = useState<Boolean>(false);

  // const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  const handleSort = (name: any) => {
    if (name == ASCENDING_PRICE) {
      setProducts([...products].sort((a: any, b: any) => a.price - b.price));
    } else if (name == THE_NEWS) {
      console.log("created by most recent (add date)");
    } else if (name == DECREASING_PRICE) {
      setProducts([...products].sort((a: any, b: any) => b.price - a.price));
    } else if (name == THE_MOST_POPULAR) {
      setProducts(
        [...products].sort(
          (a: any, b: any) => ArrayAvg(b.star) - ArrayAvg(a.star)
        )
      );
    }
  };

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
            <span className="font-bold"> {capitalize(router.query.id)}</span>
          </p>
        </div>
        <h1 className="text-2xl my-10 text-center font-semibold">
          Tous nos produits de la catégorie : {capitalize(router.query.id)}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row overflow-hidden px-5 lg:px-0 border-t ">
        <Filter
          toggleFilter={toggleFilter}
          setToggleFilter={setToggleFilter}
          setProducts={setProducts}
          productData={productData}
        />
        <div className="lg:pr-5 grow pt-5">
          <div className="flex flex-wrap gap-x-10 gap-y-5 flex-row-reverse justify-between">
            <div className="relative ">
              <select
                onChange={(e) => handleSort(e.target.value)}
                onClick={() => setSort(!sort)}
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
                className={`duration-200 ease absolute pointer-events-none right-4 top-1/2 -translate-y-1/2 ${
                  sort && "rotate-180"
                }`}
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
            <div className="flex py-5 gap-5 pb-20 overflow-hidden">
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

export async function getServerSideProps(context: any) {
  const url: string = context.resolvedUrl;

  const res = await fetch(URL_GET_PRODUCT + url);
  const productData = await res.json();

  return {
    props: {
      productData,
    },
  };
}
