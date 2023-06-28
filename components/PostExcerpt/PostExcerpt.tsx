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
        <Text variant='h3' className={s.title} color='white'>
          {post.icon} {" "} {post.properties.page}
        </Text>

        <p className={s.content}>{post.properties.excerpt}</p>

        <div className={s.date}>{post.properties.date}</div>
      </Link>
    </>
  )
}

export default PostExcerpt