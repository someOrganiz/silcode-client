import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { createWrapper } from "next-redux-wrapper";
import { setupStore } from "../store/store";
import { Provider } from "react-redux";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const store = setupStore();

export default function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: NextPage) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
