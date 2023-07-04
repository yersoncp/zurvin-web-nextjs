import s from './Layout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Stack from '../Stack/Stack'
import Text from '../Text/Text'

const Layout = ({ children }) => (
  <div className={s.layout}>
    <header className={s.header}>
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
    </header>

    <main>
      {children}
    </main>

    <footer>
      <Stack className={s.footer} direction='row' justify='space-between'>
        <Image
          width={18}
          height={18}
          alt="Zurvin"
          src="/images/zurvin-logo-white.svg"
        />
        <Text color='gray'>— 2023 © Zurvin</Text>
      </Stack>
    </footer>
  </div>
)

export default Layout
