import "../styles/globals.css";
import "../styles/reset.css";
import Navbar from "../layout/Navbar";
import Aside from "../layout/Aside";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Documentation</title>
      </Head>
      <Navbar />
      <div className="flex justify-center mt-10 bg-neutral-900">
        <Aside />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
