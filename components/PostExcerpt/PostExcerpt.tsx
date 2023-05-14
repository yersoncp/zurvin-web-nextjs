import Link from 'next/link'
import { IPostItem } from '../../services/notion/interfaces/post.interface'
import s from './PostExcerpt.module.css'

type PostExcerptProps = {
  post: IPostItem
}

const PostExcerpt = ({ post }: PostExcerptProps) => {
  return (
    <>
      <Link
        className={s.wrapper}
        href={`/post/${post.id}`}
      >
        <h3 className={s.title}>
          {post.icon}
          {" "}
          {post.properties.page}
        </h3>

        <p className={s.content}>{post.properties.excerpt}</p>

        <div className={s.date}>{post.properties.date}</div>
      </Link>
    </>
  )
}

export default PostExcerpt