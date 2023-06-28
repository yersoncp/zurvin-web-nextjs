import Link from 'next/link';
import Image from 'next/image';
import s from './Header.module.css';

const Header = () => (
  <div className={s.header}>
    <Link href="/">
      <Image
        width={24}
        height={24}
        alt="Zurvin"
        src="/images/zurvin-logo-white.svg"
      />
    </Link>

    <div className={s.menu}>
      <Link href="/blog">Blog</Link>
    </div>
  </div>
)

export default Header;