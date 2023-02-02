import Head from "next/head";
import Indicator from "../../components/checkout/Indicator";
import ReviewCheckout from "../../components/checkout/ReviewCheckout";
import Summary from "../../components/checkout/Summary";
import { COMPANY_NAME } from "../../constants/Constants";

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{COMPANY_NAME} - Panier</title>
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
