import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Filter from "../../components/category/Filter";
import {
  COMPANY_NAME,
  URL_GET_PRODUCT,
  URL_GET_PRODUCT_BY_CATEGORY,
} from "../../constants/Constants";
import { productsData, productsItem } from "../../types/product";
import {
  ArrayAvg,
  capitalize,
  starInArray,
  toggleHeart,
} from "../../utils/productUtils";

export default function Home({ category }: { category: productsData }) {
  const router = useRouter();
  const [toggleFilter, setToggleFilter] = useState<Boolean>(false);

  console.log(category);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{COMPANY_NAME} - Panier</title>
        <link rel="icon" href="logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta
          name="description"
          content="Montagne Addicte : E-commerce crée par Tom Sonvico (@SonviCode) avec Next.Js - Typescript - Tailwind CSS - MongoDB - Node.Js - Express."
        />
      </Head>
      <div>
        <div className="px-5">
          <div className="text-xs md:text-base">
            <p className="italic ">
              <Link href="/">{COMPANY_NAME}</Link> -{" "}
              <Link href="/categorie">Catégorie</Link> -
              <span className="font-bold"> {capitalize(router.query.id)}</span>
            </p>
          </div>
          <h1 className="text-2xl my-10 text-center font-semibold">
            Tous nos produits de la catégorie : {capitalize(router.query.id)}
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row  px-5 lg:px-0 border-t ">
          <Filter
            toggleFilter={toggleFilter}
            setToggleFilter={setToggleFilter}
            category={category}
          />
          <div className="lg:pr-5 grow pt-5">
            <div className="flex flex-wrap gap-x-10 gap-y-5 flex-row-reverse justify-between">
              <div className="relative">
                <select className="rounded-md border border-gray-300 appearance-none w-fit bg-white text-gray-700 h-full py-2 px-4 pr-10 leading-tight focus:outline-none focus:border-gray-500 cursor-pointer ">
                  <option>Les nouveautés</option>
                  <option>Prix croissants</option>
                  <option>Prix décroissants</option>
                  <option>Les plus populaires</option>
                </select>
                <i className="fa-solid fa-chevron-down absolute pointer-events-none right-4 top-1/2 -translate-y-1/2"></i>
              </div>

              <div className="relative lg:hidden">
                <button
                  onClick={() => setToggleFilter(true)}
                  className="rounded-md border border-gray-300 appearance-none w-fit bg-white text-gray-700 py-2 px-4 pr-14 cursor-pointer "
                >
                  Tout les filtres
                </button>
                <i className="fa-solid fa-list absolute pointer-events-none right-4 top-1/2 -translate-y-1/2"></i>
              </div>
            </div>

            <div className="flex py-5 gap-5 flex-wrap pb-20 overflow-hidden">
              {category.map((el: productsItem, index: any) => (
                <Link
                  href={`/product/${el.name}`}
                  key={index}
                  className="min-w-[220px] max-w-[400px] cursor-pointer"
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
                      width="300"
                      height="300"
                      alt={el.name}
                      className="group-hover:scale-75 duration-300 ease  object-center rounded-md p-10"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-bold">{el.name}</h3>
                    <span className="text-sm font-bold pt-0.5">
                      {el.price},00€
                    </span>
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
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  // console.log(context.params);
  // console.log(context.query);

  const sex = context.query.sex || "";

  const id = await context.params.id;

  const res = await fetch(URL_GET_PRODUCT_BY_CATEGORY + id + `?sex=${sex}`);
  const category = await res.json();

  return {
    props: {
      category,
    },
  };
}
