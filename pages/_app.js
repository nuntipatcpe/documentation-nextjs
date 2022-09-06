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
      <div className="flex mt-10">
        <Aside />
        <div className="mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
