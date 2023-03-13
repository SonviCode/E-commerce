import Head from "next/head";
import Link from "next/link";
import { COMPANY_NAME } from "../../constants/Constants";

export default function Category() {
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
        <h1 className="text-center text-3xl my-10">
          Toutes nos catégories disponibles !
        </h1>
      </div>
    </>
  );
}
