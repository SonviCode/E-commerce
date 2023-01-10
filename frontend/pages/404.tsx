import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_NAME } from "../constants/Constants";
import logo from "../public/logo.png";

export default function Error404() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{COMPANY_NAME} - 404</title>
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
          content="Outdoor shop : E-commerce crée par Tom Sonvico (@SonviCode) avec Next.Js - Typescript - Tailwind CSS - MongoDB - Node.Js - Express."
        />
      </Head>
      <main className="text-3xl flex justify-center items-center grow min-h-[500px]">
        <div className="">
          <Image src={logo} width={250} height={250} alt="logo" />
          <h1>Page introuvable</h1>
          <Link
            href="/"
            className="rounded-md text-xs border-solid border-gray-600 border-2 py-1 px-2 hover:bg-gray-600 hover:text-white duration-300 ease-in"
          >
            Accueil
          </Link>
        </div>
      </main>
    </>
  );
}
