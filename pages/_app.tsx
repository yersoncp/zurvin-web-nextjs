import "../styles/globals.css";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zurvin | React, NextJS, TypeScript and JavaScript</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="React, TypeScript, JavaScript y CSS" />
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
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;