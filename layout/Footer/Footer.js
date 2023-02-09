import s from './Footer.module.css';

const Footer = () => (
   <div>
      <div className={s.footer}>
         <div className={s.copyright}>
            <span>2023 © Zurvin. Build with ❤️ using React.</span>
         </div>
      </div>
   </div>
)

export default Footer;