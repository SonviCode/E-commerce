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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>{COMPANY_NAME} - Achat</title>
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
      <main className="min-h-screen pt-24 px-5">
        <div>
          <p className="italic ">
            <Link href="/">{COMPANY_NAME}</Link> - Recherche -
            <span className="font-bold uppercase">
              {" "}
              {router.query.slug}
            </span>
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
