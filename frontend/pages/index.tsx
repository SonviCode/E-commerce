import { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from "next/head";
import HeaderHome from "../components/home/HeaderHome";
import CategoryHome from "../components/home/CategoryHome";
import {
  COMPANY_NAME,
  URL_CATEGORY,
  URL_GET_PRODUCT,
} from "../constants/Constants";
import { allCategoryData } from "../types/home";
import { productsData, productsItem } from "../types/product";
import ProductCard from "../components/product/ProductCard";
import SliderHome from "../components/home/SliderHome";

export default function Home({
  allCategoryData,
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{COMPANY_NAME}</title>
      </Head>

      <HeaderHome />
      <SliderHome products={products}/>
      <CategoryHome allCategoryData={allCategoryData} />
      <div className="my-20 max-w-screen-2xl mx-auto">
        <h2 className="titleHome">Les dernières nouveautés</h2>
        <div className="containerProducts">
          {products.map(
            (el: productsItem, index: React.Key) => (
              <ProductCard el={el} key={index} />
            )
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  allCategoryData: allCategoryData;
  products: productsData;
}> = async () => {
  const allCategoryData = await (await fetch(URL_CATEGORY)).json();
  const products = await (await fetch(URL_GET_PRODUCT)).json();

  const res = await Promise.all([allCategoryData, products]);

  return {
    props: {
      allCategoryData: res[0],
      products: res[1],
    },
  };
};
