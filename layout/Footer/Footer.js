import Link from 'next/link';
import Image from 'next/image';
import s from './Footer.module.css';
import PARAMS from '../../params/params';

const linkMedium = PARAMS.links.medium;
const linkContact = PARAMS.links.mail;
const linkGithubCode = PARAMS.links.githubWebsite;

const Footer = () => (
   <div>

      <div className={s.footer}>
         <div>
            <Link href="/">
               <a className={s.logo}>
                  <Image
                     width={100}
                     height={30}
                     alt="Zurvin"
                     src="/images/zurvin-logo-white.svg"
                     />
               </a>
            </Link>
            <p className={s.slogan}>
               Construimos aplicaciones web con la corazón
            </p>

         </div>

         <div>
            <h4>Nosotros</h4>
            <Link href={linkMedium}><a className={s.menu} target="_blank">Medium</a></Link>
            <Link href={linkGithubCode}><a className={s.menu} target="_blank">Open source</a></Link>
         </div>

         <div>
            <h4>Contacto</h4>
            <Link href={linkContact}><a className={s.menu} target="_blank">Contacto</a></Link>
         </div>
      </div>

      <div>
         <div className={s.copyright}>
            <span>2021 © Zurvin. Hecho con ❤️ usando React.</span>
         </div>
      </div>

   </div>
)

export default Footer;