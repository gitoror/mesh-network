import styles from "@/styles/globals.css";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/navbar.js";
import Page from "@/components/page.js";
import Image from "next/image";

const inter = Open_Sans({ subsets: ["latin"] });

// The Component prop is the active page, so whenever you navigate
// between routes, Component will change to the new page.
// Therefore, any props you send to Component will be received by
// the page.

// pageProps is an object with the initial props that were
// preloaded for your page by one of our data fetching methods,
// otherwise it's an empty object.

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Projet sur les réseaux Mesh" />
        <meta name="author" content="TM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/neural-2.ico" />
        <title>Réseaux Mesh</title>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
          line-height: 1.4;
        }
        h1 {
          font-weight: 600;
        }
        h2 {
          font-weight: 500;
        }
      `}</style>
      <Navbar />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}
