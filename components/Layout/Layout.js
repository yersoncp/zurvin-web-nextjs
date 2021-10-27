import Header from '../Header/Header'
import s from './Layout.module.css';
import Meta from '../Meta/Meta';
import Footer from '../Footer/Footer';

const Layout = props => (
   <div className={s.layout}>
   
      <Meta />
      <Header />
      { props.children }
      <Footer />

   </div>
)

export default Layout;