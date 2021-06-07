import Layout from "../components/Layout";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import NProgress, { set } from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Loader from "../components/Loader";

import { ToastContainer } from "react-toastify";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

//Binding events.
// The handler to smoothly scroll to the element into view
const handExitComplete = () => {
  if (typeof window !== "undefined") {
    const hashId = window.location.hash;

    console.log({ location: window.location, hashId });

    if (hashId) {
      const element = document.querySelector(hashId);
      console.log({ element });

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }
};

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  Router.events.on("routeChangeStart", (url) => {
    console.log(`Loading: ${url}`);
    setLoading(true);
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => NProgress.done());
  <div>
    <Head>
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
  </div>;
  return (
    <Layout>
      {loading && <Loader />}
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
        <Component {...pageProps} />
        <ToastContainer />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
