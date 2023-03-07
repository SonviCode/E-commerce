import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_NAME } from "../constants/Constants";
import logo from "../public/logo.png";

export default function Error404() {
  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - 404</title>
      </Head>
      <div className="text-3xl flex justify-center items-center min-h-[500px]">
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
      </div>
    </>
  );
}
