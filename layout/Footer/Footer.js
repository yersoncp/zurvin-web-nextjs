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
               <Image
                  width={100}
                  height={30}
                  alt="Zurvin"
                  src="/images/zurvin-logo-white.svg"
                  />
            </Link>
            <p className={s.slogan}>
               I build custom web experiences with React
            </p>

         </div>

         <div>
            <h4>About</h4>
            <Link href={linkMedium}>Medium</Link>
            <Link href={linkGithubCode}>Open source</Link>
         </div>

         <div>
            <h4>Contact</h4>
            <Link href={linkContact}>Email</Link>
         </div>
      </div>

      <div>
         <div className={s.copyright}>
            <span>2022 © Zurvin. Build with ❤️ using React.</span>
         </div>
      </div>

   </div>
)

export default Footer;