import Avatar from '../Avatar/Avatar'
import DateFormatter from '../DateFormatter/DateFormatter'
import CoverImage from '../CoverImage/CoverImage'
import PostTitle from '../PostTitle/PostTitle'
import Author from '../../interfaces/author'
import s from './PostHeader.module.css'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className={s.PostHeader__Container}>
      <PostTitle>{title}</PostTitle>

      <Avatar name={author.name} picture={author.picture} />

      <div className={s.PostHeader__date}>
        <DateFormatter dateString={date} />
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        {coverImage ? (
          <CoverImage title={title} src={coverImage} />
        ): null}
      </div>

    </div>
  )
}

export default PostHeader