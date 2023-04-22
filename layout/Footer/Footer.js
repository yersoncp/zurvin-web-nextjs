import s from './Footer.module.css';
import ConvertKit from '../../components/ConvertKit/ConvertKit';

const Footer = () => (
  <div className={s.footer}>

    <ConvertKit />

    <div className={s.copyright}>
      <span>2023 © Zurvin. Build with ❤️ using React.</span>
    </div>
  </div>
)

export default Footer;