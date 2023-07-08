import "../styles/globals.css";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zurvin | React, NextJS, TypeScript y JavaScript</title>
        <meta name="description" content="Bienvenido a mi web personal, un proyecto para aprender sobre React, NextJS y JavaScript." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#080808" />
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Z18LPNE7M2`}
        async
      />

      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        async
      >
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z18LPNE7M2', {
            page_path: window.location.pathname,
            });
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;