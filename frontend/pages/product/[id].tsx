import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { COMPANY_NAME } from "../../constants/Constants";
import { productComment, productsItem } from "../../types/product";
import { handleDate } from "../../utils/productUtils";
import {
  ArrayAvg,
  capitalize,
  starInArray,
  toggleHeart,
} from "../../utils/productUtils";

export default function Home({ product }: { product: productsItem }) {
  const router = useRouter();
  const [counter, setCounter] = useState<number>(1);
  const [displayDescription, setDisplayDescription] = useState<boolean>(true);

  console.log(product.like);

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
      <div className="md:px-5 mb-20">
        <div>
          <p className="italic ">
            <Link href="/">{COMPANY_NAME}</Link> -{" "}
            <Link href="/category/habits">Habits</Link> -
            <span className="font-bold"> {capitalize(router.query.id)}</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 my-10">
          <div className="overflow-hidden group w-full mx-auto rounded-md bg-gray-200 relative flex-1 flex justify-center items-center h-fit">
            <i
              onClick={() => toggleHeart(product)}
              className={` text-sm p-1 rounded-full w-8 h-8 bg-white flex justify-center items-center absolute cursor-pointer top-4 right-4 z-10  ${
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
              className=" object-center rounded-md p-10"
            />
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <div>
              <h1 className="text-3xl">{product.name}</h1>
              <p>{product.smallDescription}</p>
              <span>
                <>
                  {starInArray(ArrayAvg(product.star)).map((nb, i) => (
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
              <span>({product.star.length})</span>
            </div>
            <hr />
            <div>
              <span className="text-md font-bold pt-0.5">
                {product.price},00€
              </span>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <span>Choisi une couleur</span>
              <div className="flex gap-2">
                <div className="w-20 rounded-md bg-gray-200 p-2">
                  <Image
                    src={product.url}
                    width="800"
                    height="800"
                    alt={product.name}
                    className="object-center rounded-md "
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-4">
              <div>
                <div className="rounded-full bg-gray-200 justify-between items-center w-fit flex gap-5 w-[120px]">
                  <button
                    onClick={() => setCounter((curr) => curr - 1)}
                    className="py-2 pl-4"
                  >
                    -
                  </button>
                  <span>{counter}</span>
                  <button
                    onClick={() => setCounter((curr) => curr + 1)}
                    className="py-2 pr-4"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="rounded-full bg-main items-center sm:w-fit py-2 px-4 hover:text-white">
                  Achetez maintenant
                </button>

                <button className="rounded-full border-main border-2 items-center sm:w-fit py-2 px-4">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div
              onClick={() => setDisplayDescription(!displayDescription)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="py-2 font-semibold text-xl">Description</h3>{" "}
              {displayDescription ? (
                <i className="fa-solid fa-chevron-up mr-2"></i>
              ) : (
                <i className="fa-solid fa-chevron-down mr-2"></i>
              )}
            </div>
            <hr />
            {displayDescription ? (
              <p className="text-sm md:text-base mb-10 pt-2 duration-300 ease">
                {product.bigDescription}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center gap-5 mt-10">
            <h3 className="text-3xl">Avis</h3>
            <p>
              Note moyenne :{" "}
              <span className="text-3xl">{ArrayAvg(product.star)} / 5</span>
            </p>
            <p>Nombre de notes : {product.star.length}</p>
          </div>
          <div className="mt-5">
            {product.comments.map(
              (el: any, index: React.Key | null | undefined) => (
                <div key={index} className="flex flex-col py-5">
                  <hr />
                  <h2 className="mt-5 font-medium">
                    {capitalize(el.firstname)} {capitalize(el.name)}
                  </h2>
                  <p className="mb-5 italic">{handleDate(el.date)}</p>
                  <span>
                    <>
                      {starInArray(ArrayAvg([el.star])).map((nb, i) => (
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
                  <p className="font-bold">{el.title}</p>
                  <p>{el.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
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
