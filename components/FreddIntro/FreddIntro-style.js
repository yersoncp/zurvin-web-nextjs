import css from 'styled-jsx/css'

export default css`
   .fredd {
      padding: 3rem 0;
      display: block;
   }
   .fredd__inner {
      max-width: 600px;
   }
   h2 {
      font-size: 3.2rem;
      font-weight: 100;
      line-height: 4rem;
      font-weight: 400;
      color: #fff;
      margin: 2rem 0;
   }
   h3 {
      font-weight: 300;
      line-height: 2rem;
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

   .fredd__featured {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-column-gap: 2rem;
   }

   .fredd__featured div {
      background: #151515;
      padding: 1rem 2rem;
      border-radius: .5rem;
      color: #fff;
   }

   .emoji {
      font-size: 1.6rem;
      margin: 5px;
   }
`