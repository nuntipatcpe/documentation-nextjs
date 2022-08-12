import "../styles/globals.css";
import "../styles/reset.css";
import Navbar from "../layout/Navbar";
import Aside from "../layout/Aside";


function MyApp({ Component, pageProps }) {
  return (
    <>
        <Navbar />
      <div className="flex justify-center mt-20">
        <Aside />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
