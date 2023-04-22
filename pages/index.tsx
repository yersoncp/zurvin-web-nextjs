import Layout from '../layout/Layout/Layout'
import { getAllPosts } from '../libs/api'
import PostPreview from '../components/PostPreview/PostPreview';
import { IPost } from '../interfaces/post';

type IPostProps = {
  allPosts: IPost[]
}

export default function Index({ allPosts }: IPostProps) {
  return (
    <Layout>
      <h2
        style={{ fontSize: '5rem', fontFamily: 'Poppins', display: 'inline-block' }}
        className="color-gradient"
      >
        Blog. Share.
      </h2>

      {allPosts?.map(post => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}