import Link from 'next/link'
import { Post } from '../../services/post/post.type'
import s from './PostExcerpt.module.css'
import Text from '../Text/Text'

type PostExcerptProps = {
  post: Post
}

const PostExcerpt = ({ post }: PostExcerptProps) => {
  return (
    <>
      <Link
        className={s.wrapper}
        target="_blank"
        href={`${post.properties.url}`}
      >
        <div className={s.date}>{post.properties.date}</div>
        <Text variant='h4' className={s.title} color='gray'>
          {post.icon} {" "} {post.properties.page}
        </Text>
      </Link>
    </>
  )
}

export default PostExcerpt