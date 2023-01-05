import Head from "next/head";
import ImageHome from "../components/ImageHome";
import SliderHome from "../components/SliderHome";

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Outdoor Shop</title>
        <link rel="icon" href="shop.svg"/>
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
        {/* <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    /> */}
      </Head>
      <main className="text-3xl">
        <ImageHome/>
        <SliderHome/>
      </main>
    </>
  );
}
