import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "../components/container/Container";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { useState, useEffect } from "react";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <>
        <Provider store={store}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Provider>
      </>
    )
  );
}
