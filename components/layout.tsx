import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="min-container">{children}</main>
      <Footer />
    </>
  );
}
