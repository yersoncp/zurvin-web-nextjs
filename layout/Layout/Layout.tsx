import Header from '../Header/Header'
import s from './Layout.module.css'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => (
  <div className={s.layout}>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
