import css from 'styled-jsx/css'

export const singlePortfolio = css`
   a {
      transition: all .3s;
      /* filter: grayscale(1); */
      opacity: .75;
   }
   a:hover {
      opacity: .9;
      filter: none;
   }

   @media (max-width: 600px) {
      a {
         transition: all .3s;
         filter: none;
         opacity: 1;
      }
   }
`

export default css`
   .portfolio {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 1rem;
      grid-column-gap: 1rem;
      padding-bottom: 3rem;
   }

   @media (max-width: 600px) {
      .portfolio {
         grid-template-columns: 1fr;
      }
   }
`