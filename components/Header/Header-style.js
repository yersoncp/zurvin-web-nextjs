import css from "styled-jsx/css";

export default css`
   .header__inner {
      padding: 2rem 0;
      display: grid;
      grid-template-columns: 1fr 4fr;
      align-items: center;
   }

   .logo img {
      max-width: 100px;
   }

   .menu-wrapper {
      text-align: right;
   }
   .menu {
      color: #ccc;
      text-decoration: none;
      transition: all .3s;
      font-size: 12px;
      padding: 5px 15px;
   }
   .menu:hover {
      color: #fff;
   }
`;
