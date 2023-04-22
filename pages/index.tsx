import Layout from '../layout/Layout/Layout'
import { IPost } from '../interfaces/post';
import { getAllPosts } from '../libs/api'
import PostPreview from '../components/PostPreview/PostPreview';

type IPostProps = {
  allPosts: IPost[]
}

export default function Index({ allPosts }: IPostProps) {
  const recentPosts = allPosts?.slice(0, 2)
  const otherPosts = allPosts?.slice(2, allPosts.length)

  return (
    <Layout>
      <h2
        style={{ fontSize: '5rem', fontFamily: 'Poppins', display: 'inline-block' }}
        className="color-gradient"
      >
        Blog. Share.
      </h2>

      <h3 style={{ fontSize: '2rem', fontFamily: 'Poppins', fontWeight: 400, color: '#fff' }}>Recientes</h3>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
        {recentPosts?.map(post => (
          <PostPreview
            key={post.slug}
            post={post}
            showCover
          />
        ))}
      </div>

      <h3 style={{ fontSize: '2rem', fontFamily: 'Poppins', fontWeight: 400, color: '#fff' }}>Artículos</h3>
      {otherPosts?.map((post, index) => (
        <PostPreview
          key={post.slug}
          post={post}
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