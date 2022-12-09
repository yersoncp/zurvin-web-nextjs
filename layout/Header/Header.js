import Link from 'next/link';
import Image from 'next/image';
import PARAMS from '../../params/params';
import s from './Header.module.css';

const linkBlog = PARAMS.links.blog;

const Header = () => (
   <div>
      <div className={s.header__inner}>
         <Link href="/" id="logo">
            <Image
               width={100}
               height={30}
               alt="Zurvin"
               src="/images/zurvin-logo-white.svg"
               />
         </Link>

         {/* <div className={s.menuWrapper}>
            <Link href={linkBlog}>Blog</Link>
         </div> */}
      </div>
   </div>
)

export default Header;