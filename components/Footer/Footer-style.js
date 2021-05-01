import css from 'styled-jsx/css'

export default css`
   .footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
      padding: 80px 0;
      border-top: 1px solid #181818;
      margin-top: 3rem;
   }
   .copyright {
      font-size: 13px;
   }
   .copyright a {
      font-weight: 400;
      text-decoration: none;
   }
`