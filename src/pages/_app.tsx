import { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/index.scss";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
