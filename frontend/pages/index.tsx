import { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from "next/head";
import BgHome from "../components/home/BgHome";
import ImageHome from "../components/home/ImageHome";
import {
  COMPANY_NAME,
  URL_CATEGORY,
  URL_GET_PRODUCT,
} from "../constants/Constants";
import { imgHomeData } from "../types/home";
import { productsData, productsItem } from "../types/product";
import ProductCard from "../components/ProductCard";

export default function Home({
  imgHomeData,
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{COMPANY_NAME}</title>
      </Head>

      <BgHome />
      <ImageHome imgHomeData={imgHomeData} />
      <div className="px-5 mt-20 mb-20 max-w-7xl mx-auto">
        <h2 className="uppercase after:block after:absolute after:w-40 after:h-1 after:bg-main after:rounded-md pl-[5%] text-3xl">
          Les dernières nouveautés
        </h2>
        <div className="flex py-5 gap-5  overflow-hidden">
          {products.map(
            (el: productsItem, index: React.Key | null | undefined) => (
              <ProductCard el={el} key={index} />
            )
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  imgHomeData: imgHomeData;
  products: productsData;
}> = async () => {
  const imgHomeData = await (await fetch(URL_CATEGORY)).json();
  const products = await (await fetch(URL_GET_PRODUCT)).json();

  const res = await Promise.all([imgHomeData, products]);

  console.log(res);

  return {
    props: {
      imgHomeData: res[0],
      products: res[1],
    },
  };
};
