import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, Dispatch } from "react";
import { COMPANY_NAME, URL_GET_PRODUCT } from "../../constants/Constants";
import { productComment, productsItem } from "../../types/product";
import { handleDate, changeCounter } from "../../utils/productUtils";
import {
  ArrayAvg,
  capitalize,
  starInArray,
  toggleHeart,
} from "../../utils/productUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import * as fr from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { setShopData } from "../../store/features/slice/shopSlice";

export default function Home({ product }: { product: productsItem }) {
  const router = useRouter();
  const [counter, setCounter] = useState<number>(1);
  const [displayDescription, setDisplayDescription] = useState<boolean>(true);

  const dispatch = useDispatch();

  const addToShopCart = () => {
    dispatch(setShopData(product));
  };

  return (
    <>
      <Head>
        <title>
          {COMPANY_NAME} - {product.name}
        </title>
      </Head>
      <div className="px-5 mb-20">
        <div>
          <p className="italic ">
            <Link href="/">{COMPANY_NAME}</Link> -{" "}
            <Link href={`/category/${product.category}`}>
              {capitalize(product.category)}
            </Link>{" "}
            -<span className="font-bold"> {capitalize(router.query.id)}</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 my-10">
          <div className="overflow-hidden group w-full mx-auto rounded-md bg-gray-200 relative flex-1 flex justify-center items-center h-fit">
            <span
              onClick={() => toggleHeart(product)}
              className="text-sm p-1 rounded-full w-8 h-8 bg-white flex justify-center items-center absolute cursor-pointer top-4 right-4 z-10"
            >
              {product.like === true ? (
                <FontAwesomeIcon icon={fs.faHeart} className="text-red-500" />
              ) : (
                <FontAwesomeIcon icon={fr.faHeart} />
              )}
            </span>
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
                    <span key={i}>
                      {nb == 1 ? (
                        <FontAwesomeIcon
                          icon={fs.faStar}
                          className="text-yellow-300"
                        />
                      ) : nb == 5 ? (
                        <FontAwesomeIcon
                          icon={fs.faStarHalfStroke}
                          className="text-yellow-300"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={fs.faStar}
                          className="text-gray-200"
                        />
                      )}
                    </span>
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
                <div className="rounded-lg bg-gray-200 justify-between items-center w-fit flex gap-5 w-[120px] mb-5">
                  <button
                    onClick={() => changeCounter(-1, counter, setCounter)}
                    className="py-2 pl-4"
                  >
                    -
                  </button>
                  <span>{counter}</span>
                  <button
                    onClick={() => changeCounter(1, counter, setCounter)}
                    className="py-2 pr-4"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <button className="rounded-full bg-main items-center sm:w-fit py-2 px-4 hover:text-white">
                  Achetez maintenant
                </button> */}

                <button
                  onClick={() => addToShopCart()}
                  className="rounded-lg border-main border-2 items-center py-2 px-4 bg-main hover:text-white w-full hover:border-black"
                >
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
                <FontAwesomeIcon icon={fs.faChevronDown} className="mr-2" />
              ) : (
                <FontAwesomeIcon icon={fs.faChevronUp} className="mr-2" />
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
                        <span key={i}>
                          {nb == 1 ? (
                            <FontAwesomeIcon
                              icon={fs.faStar}
                              className="text-yellow-300"
                            />
                          ) : nb == 5 ? (
                            <FontAwesomeIcon
                              icon={fs.faStarHalfStroke}
                              className="text-yellow-300"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={fs.faStar}
                              className="text-gray-200"
                            />
                          )}
                        </span>
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

  const res = await fetch(URL_GET_PRODUCT + "/" + id);
  const product = await res.json();

  console.log(res);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(URL_GET_PRODUCT);
  const product = await res.json();

  const ids = product.map((product: any) => product.name);
  const paths = ids.map((id: string) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}
