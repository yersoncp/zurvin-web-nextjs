import Link from 'next/link'
import { IPostItem } from '../../services/notion/interfaces/post.interface'
import s from './PostExcerpt.module.css'
import Text from '../Text/Text'

type PostExcerptProps = {
  post: IPostItem
}

const PostExcerpt = ({ post }: PostExcerptProps) => {
  return (
    <>
      <Link
        className={s.wrapper}
        href={`/posts/${post.properties.slug}`}
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