import Head from "next/head";

const Meta = () => (
  <div>
    
    <Head>
      <title>Zurvin | Construimos productos digitales hermosos</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Somos cinturón negro en JavaScript y amamos construir aplicaciones web." />
      <link rel="shortcut icon" href="favicon.png" />
      <meta name="theme-color" content="#080808" />
      
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>

    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        background: #080808;
        color: rgb(134, 143, 151);
        height: 100%;
        font-family: 'Roboto Mono', monospace;
        font-weight: 300;
        letter-spacing: -.5px;
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
