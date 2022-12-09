import s from './Avatar.module.css';

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className={s.AvatarContainer}>
      <img src={picture} className={s.Avatar} alt={name} />
      <span>{name}</span>
    </div>
  )
}

export default Avatar