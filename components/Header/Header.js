import Link from 'next/link';
import style from './Header-style';

const linkMedium = '//medium.com/zurvin';
const linkContact = 'hola@zurvin';

const Header = () => (
   <div className="header">
      <div className="header__inner">
         <Link href="/">
            <a className="logo">
               <img src="images/zurvin-logo-white.svg" />
            </a>
         </Link>

         <div className="menu-wrapper">
            <Link href={linkMedium}><a className="menu" target="_blank">BLOG</a></Link>
            <Link href={linkContact}><a className="menu" target="_blank">CONTACTO</a></Link>
         </div>
      </div>
      <style jsx>{ style }</style>
   </div>
)

export default Header;