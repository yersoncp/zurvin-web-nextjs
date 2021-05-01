import Header from '../Header/Header'
import style from './Layout-style';
import Meta from '../Meta/Meta';
import Footer from '../Footer/Footer';

const Layout = props => (
   <div className="layout">
      <Meta />
      <Header />
      { props.children }
      <Footer />

      <style jsx>{ style }</style>
   </div>
)

export default Layout;