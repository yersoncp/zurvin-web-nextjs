import Head from "next/head";

const Meta = () => (
  <div>
    
    <Head>
      <title>Zurvin – FullStack JavaScript</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="paginas web huancayo, desarrollo frontend, html, angular, nodejs, web, css, javascript, webdesign" />
      <link rel="shortcut icon" href="favicon.png" />
      <meta name="theme-color" content="#0357dd" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap" rel="stylesheet" />
    </Head>

    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        background: #080808;
        color: rgb(134, 143, 151);
        height: 100%;
        font-family: "Roboto", Helvetica, sans-serif;
        font-weight: 300;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      a, p {
        line-height: 26px;
      }
      a {
        color: #fff;
      }
    `}</style>
  </div>
);

export default Meta;
