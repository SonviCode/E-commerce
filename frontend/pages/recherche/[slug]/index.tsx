import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { COMPANY_NAME } from "../../../constants/Constants";

export default function Home() {
  const router = useRouter();

  console.log(router);
  console.log(router.route);
  console.log(router.asPath);
  console.log(router.query);
  console.log(router.query.slug);

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Recherche</title>
      </Head>
      <main className="min-h-screen pt-24 px-5">
        <div>
          <p className="italic ">
            <Link href="/">{COMPANY_NAME}</Link> - Recherche -
            <span className="font-bold uppercase"> {router.query.slug}</span>
          </p>
        </div>
        <h1 className="text-xl mt-10">
          Vêtements, chaussures & accessoires pour :{" "}
          <span className="font-bold uppercase">{router.query.slug}</span>
        </h1>
      </main>
    </>
  );
}
