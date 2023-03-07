import Head from "next/head";
import { COMPANY_NAME } from "../../constants/Constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - catégorie</title>
      </Head>

      <div>All catégorie</div>
    </>
  );
}
