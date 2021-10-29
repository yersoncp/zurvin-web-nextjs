import Link from 'next/link';
import PARAMS from '../../params/params';
import AvatarMini from '../AvatarMini/AvatarMini';
import s from './Profile.module.css';

const linkGithub = PARAMS.links.github;
const linkLinkedin = PARAMS.links.linkedin;
const linkBlog = PARAMS.links.blog;

const Profile = () => (
    <div>
        <div className={s.container}>
            <AvatarMini />
            <div>
                <h4 className={s.name}>Yerson Carhuallanqui</h4>
                <p className={s.position}>Frontend Developer</p>
                <div className={s.links}>
                    <Link href={linkGithub}><a className={s.menu} target="_blank">Github</a></Link>
                    <span>|</span>
                    <Link href={linkLinkedin}><a className={s.menu} target="_blank">Linkedin</a></Link>
                    <span>|</span>
                    <Link href={linkBlog}><a className={s.menu} target="_blank">Blog</a></Link>
                </div>
            </div>
        </div>

    </div>
);

export default Profile;