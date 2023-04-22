import CoverImage from '../CoverImage/CoverImage'
import DateFormatter from '../DateFormatter/DateFormatter'
import Link from 'next/link'
import s from './PostPreview.module.css'
import { IPost } from '../../interfaces/post'

type IPostPreviewProps = {
  post: IPost
  showCover?: boolean
}

const PostPreview = ({ post, showCover }: IPostPreviewProps) => {
  return (
    <section className={s.PostPreview__container}>
      <div className="mb-8 md:mb-16">
        {(showCover && post.coverImage) ? (
          <CoverImage title={post.title} src={post.coverImage} slug={post.slug} />
        ) : null}
      </div>

      <div>
        <div>
          <h3 className={s.PostPreview__title}>
            <Link
              as={`/posts/${post.slug}`}
              href="/posts/[slug]"
            >
              {post.title}
            </Link>
          </h3>
          <div>
            <DateFormatter dateString={post.date} />
          </div>
        </div>
        <div>
          <p className={s.PostPreview__p}>{post.excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
    </section>
  )
}

export default PostPreview