import Head from "next/head";
import Indicator from "../../components/shop/Indicator";
import ReviewCheckout from "../../components/shop/ReviewCheckout";
import Summary from "../../components/shop/Summary";
import { COMPANY_NAME } from "../../constants/Constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Panier</title>
      </Head>

      <Indicator />
      <div className="flex flex-col-reverse lg:flex-row  pt-5 pb-10 gap-10 ">
        <div className="grow flex flex-col gap-10 overflow-hidden">
          <ReviewCheckout />
        </div>
        <div className="lg:min-w-[285px] lg:w-1/4">
          <Summary />
        </div>
      </div>
    </>
  );
}
