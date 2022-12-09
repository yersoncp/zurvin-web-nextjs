import Avatar from '../Avatar/Avatar'
import DateFormatter from '../DateFormatter/DateFormatter'
import CoverImage from '../CoverImage/CoverImage'
import PostTitle from '../PostTitle/PostTitle'
import Author from '../../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        {coverImage ? (
          <CoverImage title={title} src={coverImage} />
        ): null}
      </div>

      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}

export default PostHeader