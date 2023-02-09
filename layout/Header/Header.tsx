import Link from 'next/link';
import Image from 'next/image';
import s from './Header.module.css';

const Header = () => (
   <div>
      <div className={s.header__inner}>
         <Link href="/" id="logo">
            <Image
               width={30}
               height={30}
               alt="Zurvin"
               src="/images/zurvin-logo-white.svg"
               />
         </Link>

         <div className={s.menuWrapper}>
            <Link href="/">Home</Link>
         </div>
      </div>
   </div>
)

export default Header;