import Link from 'next/link';
import s from './Header.module.css';

const linkFredd = '//fredd-project-webapp.vercel.app/';

const Header = () => (
   <div>
      <div className={s.header__inner}>
         <Link href="/">
            <a className={s.logo}>
               <img src="images/zurvin-logo-white.svg" />
            </a>
         </Link>

         <div className={s.menuWrapper}>
            <Link href={linkFredd}><a className={s.button} target="_blank">Ingresar a Fredd</a></Link>
         </div>
      </div>
   </div>
)

export default Header;