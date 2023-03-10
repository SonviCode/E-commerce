import Head from "next/head";
import Favoris from "../../components/favoris/Favoris";
import Historic from "../../components/favoris/Historic";

import { COMPANY_NAME } from "../../constants/Constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Favoris</title>
      </Head>

      <div className="py-10 px-5 flex flex-col gap-20">
        <Favoris />
        <Historic/>
      </div>
    </>
  );
}
