import Link from 'next/link';
import Image from 'next/image';
import s from './Header.module.css';

const Header = () => (
   <div>
      <div className={s.header__inner}>
         <Link href="/" id="logo">
            <Image
               width={24}
               height={24}
               alt="Zurvin"
               src="/images/zurvin-logo-white.svg"
               />
         </Link>

         <div className={s.menuWrapper}>
            <Link href="/">Home</Link>
            <Link href="/">Portafolio</Link>
            <Link href="/">Blog</Link>
         </div>
      </div>
   </div>
)

export default Header;