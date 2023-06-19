import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  COMPANY_NAME,
  URL_GET_ORDERS_BY_EMAIL,
  URL_GET_PRODUCT,
} from "../../constants/Constants";
import { productsData, productsItem } from "../../types/product";
import { changeCounterProduct } from "../../utils/productUtils";
import { capitalize, toggleHeart } from "../../utils/productUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import * as fr from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import ButtonShop from "../../components/UI/components/ButtonShop";
import { setHistoric } from "../../store/features/slice/historicSlice";
import StarProduct from "../../components/UI/components/StarProduct";
import { RootState } from "../../store/store";
import { GetStaticPaths, GetStaticProps } from "next";
import { User } from "../../types/user";
import useCheckJwt from "../../hooks/useCheckJwt";
import axios from "axios";
import { Order } from "../../types/shop";
import ProductComment from "../../components/product/ProductComment";

export default function ProductId({ product }: { product: productsItem }) {
  const [counter, setCounter] = useState<number>(1);
  const [orders, setOrders] = useState<Order[]>();
  const [canComment, setCanComment] = useState<boolean>(false);
  const [displayDescription, setDisplayDescription] = useState<boolean>(true);

  const favData: productsData = useSelector(
    (state: RootState) => state.favoris.value
  );
  const shopData: productsData = useSelector(
    (state: RootState) => state.shop.value
  );
  const user: User = useSelector((state: RootState) => state.user.value);

  const router = useRouter();
  const dispatch = useDispatch();

  useCheckJwt();

  useEffect(() => {
    axios
      .get<Order[]>(URL_GET_ORDERS_BY_EMAIL + user?.email, {
        headers: {
          Authorization: localStorage.getItem(
            process.env.NEXT_PUBLIC_USER_TOKEN!
          ),
        },
      })
      .then((res) => setOrders(res.data))
      .catch((error) => console.log(error));
  }, [user?.email]);

  useEffect(() => {
    if (orders && orders.length > 0) {
      const allProductsOrdered: productsItem[] = [];

      orders.forEach((order) =>
        order.products.forEach((product) => allProductsOrdered.push(product))
      );

      if (
        allProductsOrdered.find(
          (productOrder) => productOrder._id === product._id
        ) !== undefined &&
        product.comments.find((comment) => comment.email === user?.email) ==
          undefined
      ) {
        setCanComment(true);
      }
    }
  }, [orders, product._id, product.comments, user?.email]);

  useEffect(() => {
    dispatch(setHistoric(product));
  }, [dispatch, product]);

  return (
    <>
      <Head>
        <title>
          {COMPANY_NAME} - {product.name}
        </title>
      </Head>
      <div className="px-5 mb-20 max-w-screen-2xl mx-auto">
        <div>
          <p className="italic ">
            <Link href="/">{COMPANY_NAME}</Link> -{" "}
            <Link href={`/category/${product.category}`}>
              {capitalize(product.category)}
            </Link>{" "}
            -<span className="font-bold"> {capitalize(product.name)}</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 my-10">
          <div className="overflow-hidden group w-full mx-auto rounded-md bg-gray-200 relative flex-1 flex justify-center items-center h-fit">
            <span
              onClick={() => toggleHeart(product, favData, dispatch)}
              className="text-sm p-1 rounded-full w-8 h-8 bg-white flex justify-center items-center absolute cursor-pointer top-4 right-4 z-10"
            >
              {favData.some((fav: productsItem) => fav.name == product.name) ? (
                <FontAwesomeIcon icon={fs.faHeart} className="text-red-500" />
              ) : (
                <FontAwesomeIcon icon={fr.faHeart} />
              )}
            </span>
            <Image
              src={product.imageUrl}
              width="800"
              height="800"
              alt={product.name}
              className=" object-center rounded-md p-10"
            />
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <div>
              <h1 className="text-3xl title">{product.name}</h1>
              <p>{product.smallDescription}</p>
              <StarProduct star={product.star} />
              <span>({product.star.length})</span>
            </div>
            <hr />
            <div>
              <span className="text-md font-bold pt-0.5">
                {product.price.toFixed(2)}€
              </span>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <span>Choisi une couleur</span>
              <div className="flex gap-2">
                <div className="w-20 rounded-md bg-gray-200 p-2">
                  <Image
                    src={product.imageUrl}
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
                <div className="rounded-lg bg-gray-200 justify-between items-center flex gap-5 w-[120px] mb-5">
                  <button
                    onClick={() =>
                      changeCounterProduct(-1, counter, setCounter)
                    }
                    className="py-2 pl-4"
                  >
                    -
                  </button>
                  <span>{counter}</span>
                  <button
                    onClick={() => changeCounterProduct(1, counter, setCounter)}
                    className="py-2 pr-4"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonShop
                  product={product}
                  counter={counter}
                  shopData={shopData}
                >
                  Ajouter au panier
                </ButtonShop>
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
              <h3 className="py-2 text-xl title">Description</h3>{" "}
              {displayDescription ? (
                <FontAwesomeIcon icon={fs.faChevronDown} className="mr-2" />
              ) : (
                <FontAwesomeIcon icon={fs.faChevronUp} className="mr-2" />
              )}
            </div>
            <hr />
            {displayDescription ? (
              <p className="text-sm md:text-base mb-10 pt-2 duration-300 ease">
                {product.bigDescription
                  ? product.bigDescription
                  : "Aucune description disponible"}
              </p>
            ) : null}
          </div>
          <ProductComment
            product={product}
            canComment={canComment}
            setCanComment={setCanComment}
            user={user}
            router={router}
          />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ product: productsItem }> = async (
  context
) => {
  const id = context.params!.id;

  const res = await fetch(URL_GET_PRODUCT + "/" + id);
  const product: productsItem = await res.json();

  console.log(product);
  

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(URL_GET_PRODUCT);
  const products: productsData = await res.json();

  const ids = products.map((product: productsItem) => product.name);
  const paths = ids.map((id: string) => ({ params: { id: id.toString() } }));

  console.log(paths);
  

  return {
    paths,
    fallback: false,
  };
};
