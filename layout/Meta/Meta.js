import Head from "next/head";

const Meta = () => (
  <div>
    
    <Head>
      <title>Zurvin | React, TypeScript, JavaScript y CSS</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="React, TypeScript, JavaScript y CSS" />
      <link rel="shortcut icon" href="favicon.png" />
      <meta name="theme-color" content="#080808" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400&family=JetBrains+Mono:wght@200;300;400&family=Source+Serif+4:opsz,wght@8..60,300;8..60,400&display=swap" rel="stylesheet" />

    </Head>

    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        background: #080910;
        color: rgb(134, 143, 151);
        height: 100%;
        font-family: 'Inter', sans-serif;
        font-weight: 200;
        font-size: .96rem;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      a, p {
        line-height: 26px;
      }
      a {
        color: #ccc;
        transition: all .3s;
        text-decoration: none;
        display: inline-block;
      }
      a.link::after {
        content: '';
        display: block;
        border-top: 1px dotted #444;
      }
      a:hover {
        color: #fff;
        cursor: pointer;
      }

      h1.title {
        color: #ffF;
        font-weight: 300;
        font-size: 3rem;
        font-family: 'IBM Plex Mono', monospace;
      }

      h2.title {
        color: #ffF;
        font-weight: 300;
        font-size: 3rem;
        font-family: 'IBM Plex Mono', monospace;
      }
      h3 {
        color: #ffF;
        font-weight: 400;
        font-size: 1.65rem;
      }
      h4 {
        color: #ffF;
        font-weight: 400;
        font-size: 1.2rem;
      }

      .color-gradient {
        background-color: #fce043;
        background: linear-gradient(70.8deg,#8bc34a 20%,#ffc107 120%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      pre {
        border: 1px solid #1b2030;
        background-color: #0d0e15;
        border-radius: 8px;
        padding: 1rem;
        line-height: 1.25rem;
        font-size: .85rem;
      }

    `}</style>
  </div>
);

export default Meta;
