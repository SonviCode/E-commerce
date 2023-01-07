import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "../components/Container";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style> */}
    <Container className={poppins.className}>
      <Component  className={poppins.className} {...pageProps} />
    </Container>
    </>
  );
}
