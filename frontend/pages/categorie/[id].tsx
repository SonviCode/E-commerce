import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { COMPANY_NAME } from "../../constants/Constants";
import { productsData, productsItem } from "../../types/product";
import {
  ArrayAvg,
  capitalize,
  starInArray,
  toggleHeart,
} from "../../utils/productUtils";

export default function Home({ category }: { category: productsData }) {
  const router = useRouter();

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
        <p className="italic ">
          <Link href="/">{COMPANY_NAME}</Link> -
          <span className="font-bold"> {capitalize(router.query.id)}</span>
        </p>
      </div>
      <h1 className="text-xl mt-10">
        Tous nos produits de la catégorie : {capitalize(router.query.id)}
      </h1>
      <div>
        <h2>filtre</h2>
        -tailles -marque -prix -sports
        <ul>
          <li>Prix croissants</li>
          <li>Prix décroissants</li>
          <li>Les nouveautés</li>
          <li>Les plus populaires</li>
        </ul>
      </div>
      <div className="flex py-5 gap-5  overflow-hidden">
        {category.map((el: productsItem, index: any) => (
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
    </>
  );
}

export async function getStaticProps(context: any) {
  const id = await context.params.id;

  const res = await fetch(`http://localhost:5000/api/category/category/${id}`);
  const category = await res.json();

  return {
    props: {
      category,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:5000/api/category`);
  const categorys = await res.json();

  const ids = categorys.map((category: any) => category.category);
  const paths = ids.map((category: string) => ({
    params: { id: category.toString() },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
