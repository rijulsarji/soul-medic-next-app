import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";

import { Toaster } from "react-hot-toast";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Head>
        <link rel="shortcut icon" href="/Logo.ico" />
      </Head>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
