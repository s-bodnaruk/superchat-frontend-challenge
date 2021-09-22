import { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/index.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
