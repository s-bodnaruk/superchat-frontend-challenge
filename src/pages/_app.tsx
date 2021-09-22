import { NextPage } from "next";
import { AppProps } from "next/app";

import { ToastContainer } from "react-toastify";

import "../styles/index.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.min.css";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
};

export default App;
