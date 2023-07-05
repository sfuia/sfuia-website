import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  console.log(children)
  return (
    <div suppressHydrationWarning={true}>
      <Head>
        <title>SFUIA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
