import "../styles/globals.css";
import "../styles/reset.css";
import Navbar from "../layout/Navbar";
import Aside from "../layout/Aside";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10 bg-neutral-900">
      {/* <div className="w-full h-20 bg-neutral-600"></div> */}
        <Aside />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
