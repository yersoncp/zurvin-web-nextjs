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
         <div className={s.copyright}>
            <span>2022 © Zurvin. Build with ❤️ using React.</span>
         </div>
      </div>
   </div>
)

export default Footer;