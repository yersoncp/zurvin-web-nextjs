import Link from 'next/link';
import style from './Footer-style';

const linkDribbble = '//dribbble.com/yerson';
const linkMedium = '//medium.com/zurvin';
const linkGithubCode = '//github.com/yersoncp/zurvin-web-nextjs';

const Footer = () => (
   <div className="footer">

      <div>
         <Link href="/">
            <a className="logo">
               <img width="100px" src="images/zurvin-logo-white.svg" />
            </a>
         </Link>
         <p className="slogan">
            Somos cinturón negro en JavaScript y amamos construir aplicaciones web.
         </p>

         <p>
            _
         </p>

         <div className="copyright">
            <span>Hecho con ❤️ usando React y NextJS. <Link href={linkGithubCode}><a target="_blank">Open source</a></Link> </span>
         </div>
         
      </div>

      <div>
         <div>
            <Link href={linkMedium}><a target="_blank">Blog</a></Link>
         </div>
         <div>
            <Link href={linkDribbble}><a target="_blank">Dribbble</a></Link>
         </div>
      </div>

      <style jsx>{style}</style>
   </div>
)

export default Footer;