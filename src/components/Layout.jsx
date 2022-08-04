import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width-device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
