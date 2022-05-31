import { Global } from "@emotion/react";
import { normalize } from "@kodiui/kodiui";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={normalize} />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
