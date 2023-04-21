import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  COMPANY_NAME,
  SHOES_CATEGORY,
  URL_CATEGORY,
} from "../../constants/Constants";
import { allCategoryData, allCategoryItem } from "../../types/home";

export default function Category({
  allCategoryData,
}: {
  allCategoryData: allCategoryData;
}) {
  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - catégorie</title>
      </Head>

      <div className="px-5">
        <div className="text-xs md:text-base">
          <p className="italic ">
            <Link href="/">{COMPANY_NAME}</Link> -{" "}
            <Link href="/category" className="font-bold">
              Catégorie
            </Link>
          </p>
        </div>
        <h1 className="text-center text-3xl title my-10">
          Toutes nos catégories disponibles !
        </h1>
        <div className="py-10">
          {allCategoryData.map((category: allCategoryItem, index: any) => (
            <div key={index} className="group py-5">
              <h2 className="text-2xl italic title">
                Nos {category.name}
              </h2>
              <div className="flex flex-col lg:group-even:flex-row-reverse lg:flex-row gap-10 ">
                <div className="lg:w-1/2 flex flex-col gap-5">
                  <p className="text-sm md:text-base text-justify ">
                    {category.text}
                  </p>
                  <Link
                    href={`/category/chaussures`}
                    className="w-fit rounded-md bg-main p-2 shadow-md"
                  >
                    Voir tout les produits
                  </Link>
                </div>
                <div className="relative lg:w-1/2 min-h-[300px]">
                  <Image
                    fill
                    src={category.url}
                    // width={"0"}
                    // height={"0"}
                    alt="une image random d'outdoor"
                    className=" cursor-pointer rounded-md object-cover shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  allCategoryData: allCategoryData;
}> = async () => {
  const res = await fetch(URL_CATEGORY);
  const allCategoryData = await res.json();

  return {
    props: {
      allCategoryData,
    },
  };
};
