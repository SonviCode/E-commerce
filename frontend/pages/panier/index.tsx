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
      <main className="grow pt-24 px-5">
        <Indicator />
        <div className="flex pt-5 gap-10">
          <div className="grow">
            <ReviewCheckout />
          </div>
          <div className="min-w-[285px] w-1/4">
            <Summary />
          </div>
        </div>
      </main>
    </>
  );
}