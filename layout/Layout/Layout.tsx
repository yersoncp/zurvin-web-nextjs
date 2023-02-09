import Header from '../Header/Header'
import s from './Layout.module.css';
import Footer from '../Footer/Footer';

const Layout = props => (
   <div className={s.layout}>
      <Header />
      { props.children }
      <Footer />
   </div>
)

export default Layout;