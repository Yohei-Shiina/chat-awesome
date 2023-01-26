import React from "react";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import "~/styles/globals.scss";

type Props = AppProps<{ session: Session }>;

function App({ Component, pageProps }: Props) {
  const { session } = pageProps;

  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}

export default App;
