import axios from "axios";
import { log } from "console";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { COMPANY_NAME } from "../../constants/Constants";
import { ArrayAvg, starInArray, toggleHeart } from "../../utils/productUtils";

type dataProduct = {
  name: string;
  url: string;
  price: number;
  category: string;
  type: string;
  smallDescription: string;
  like: boolean;
  star: number[];
  sex: string;
};

export default function Home({ product }: any) {
  // const router = useRouter();
  // const [dataProduct, setDataProduct] = useState<dataProduct[]>([]);
  console.log(product);

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
      {product && (
        <>
          <div>
            <h1>{product.name}</h1>
          </div>
          <div className="flex py-5 gap-5  overflow-hidden">
            <div className="min-w-[220px] cursor-pointer">
              <div className="rproductative overflow-hidden group w-fit mx-auto rounded-md bg-gray-200 ">
                <i
                  onClick={() => toggleHeart(product)}
                  className={` text-sm p-1 rounded-full w-8 h-8 bg-white flex justify-center items-center absolute top-4 right-4 z-10  ${
                    product.like === true
                      ? `fa-solid fa-heart text-red-500`
                      : `fa-regular fa-heart `
                  }`}
                ></i>
                <Image
                  src={product.url}
                  width="800"
                  height="800"
                  alt={product.name}
                  className="group-hover:scale-75 duration-300 ease  object-center rounded-md p-10"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold">{product.name}</h3>
                <span className="text-sm font-bold pt-0.5">
                  {product.price},00€
                </span>
              </div>
              <div className="text-xs">
                <p>{product.smallDescription}</p>
                <span>
                  <>
                    {starInArray(ArrayAvg(product.star)).map((nb, i) => (
                      <i
                        key={i}
                        className={`${
                          nb == 1
                            ? `fa-solid fa-star text-yproductlow-300`
                            : nb == 5
                            ? `fa-solid fa-star-half-stroke text-yproductlow-300`
                            : `fa-solid fa-star text-gray-200`
                        }`}
                      ></i>
                    ))}
                  </>
                </span>
                <span>{product.star.length}</span>
              </div>
              <button className="rounded-md text-xs border-solid border-gray-600 border-2 py-1 px-2 hover:bg-main hover:border-main hover:text-white duration-300 ease-in hover:scale-90">
                En savoir plus
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export async function getStaticProps(context: any) {
  const id = await context.params.id;

  // console.log(context.params);
  console.log("id =", id);

  const res = await fetch(`http://localhost:5000/api/product/${id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:5000/api/product`);
  const product = await res.json();

  const ids = product.map((product: any) => product.name);
  const paths = ids.map((id: string) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}
