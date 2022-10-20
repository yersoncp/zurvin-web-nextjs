import Head from "next/head";

const Meta = () => (
  <div>
    
    <Head>
      <title>Zurvin | I build custom web experiences with React</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="I build custom web experiences with React" />
      <link rel="shortcut icon" href="favicon.png" />
      <meta name="theme-color" content="#080808" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400&family=JetBrains+Mono:wght@200;300;400&display=swap" rel="stylesheet" />

    </Head>

    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        background: #141414;
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
      h3 {
        color: #ffF;
        font-weight: 400;
        font-size: 1.6rem;
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

    `}</style>
  </div>
);

export default Meta;
