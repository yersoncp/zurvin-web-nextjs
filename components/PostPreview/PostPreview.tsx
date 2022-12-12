import Avatar from '../Avatar/Avatar'
import CoverImage from '../CoverImage/CoverImage'
import DateFormatter from '../DateFormatter/DateFormatter'
import Link from 'next/link'
import Author from '../../interfaces/author'
import s from './PostPreview.module.css'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage ? (
          <CoverImage title={title} src={coverImage} slug={slug} />
        ) : null}
      </div>
      <div>
        <div>
          <h3 className={s.title}>
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
            >
              {title}
            </Link>
          </h3>
          <div>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className={s.pharagraph}>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}

export default PostPreview