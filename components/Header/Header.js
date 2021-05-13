import Link from 'next/link';
import style from './Header-style';
import c from 'classnames';

const linkFredd = '//fredd-project-webapp.vercel.app/';

const Header = () => (
   <div className="header">
      <div className="header__inner">
         <Link href="/">
            <a className="logo">
               <img src="images/zurvin-logo-white.svg" />
            </a>
         </Link>

         <div className="menu-wrapper">
            <Link href={linkFredd}><a className="button" target="_blank">Ingresar a Fredd</a></Link>
         </div>
      </div>
      <style jsx>{ style }</style>
   </div>
)

export default Header;