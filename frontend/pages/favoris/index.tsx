import Head from "next/head";
import Favoris from "../../components/shop/Favoris";

import { COMPANY_NAME } from "../../constants/Constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Favoris</title>
      </Head>

      <div className="py-10 flex flex-col gap-20">
        <Favoris />
        <div className="border-2 rounded-md px-5 py-10 overflow-hidden">
          <h2 className="text-2xl font-bold mb-5">Historique</h2>
        </div>
      </div>
    </>
  );
}
