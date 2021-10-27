import Link from 'next/link';
import s from './Header.module.css';

const linkFredd = '//blog.zurvin.com';

const Header = () => (
   <div>
      <div className={s.header__inner}>
         <Link href="/">
            <a className={s.logo}>
               <img src="images/zurvin-logo-white.svg" />
            </a>
         </Link>

         <div className={s.menuWrapper}>
            <Link href={linkFredd}>Blog</Link>
         </div>
      </div>
   </div>
)

export default Header;