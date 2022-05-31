import { ApolloProvider } from "@apollo/client";
import { Global } from "@emotion/react";
import { normalize } from "@kodiui/kodiui";
import type { AppProps } from "next/app";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "redux/store";

export const apolloClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={normalize} />
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <Component {...pageProps} />;
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
