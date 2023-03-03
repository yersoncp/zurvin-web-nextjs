import Layout from '../layout/Layout/Layout'

import Post from '../interfaces/post'
import { getAllPosts } from '../libs/api'
import PostPreview from '../components/PostPreview/PostPreview';

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
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