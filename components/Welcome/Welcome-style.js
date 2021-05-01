import css from 'styled-jsx/css'

export default css`
   .welcome {
      padding-bottom: 3rem;
      display: block;
      max-width: 700px;
   }
   h2 {
      font-size: 3.6rem;
      color: rgb(136, 146, 176);
      font-weight: 100;
      line-height: 5.2rem;
   }

   @media (max-width: 600px) {
      h2 {
         font-size: 1.8rem;
         font-weight: 100;
         line-height: 3.2rem;
      }
   }
   h2 b {
      color: #fff;
   }
   a {
      color: #db4545;
      text-decoration: none;
      border-bottom: 1px dotted #db4545;
      transition: all .5s;
   }
   a:hover {
      color: #fff;
   }

   .stack {
      margin: 4rem 0;
   }

   .stack div {
      display: inline-block;
      max-width: 32px;
      margin: 15px;
   }

   .stack img {
      max-width: 100%;
      height: auto;
   }
`