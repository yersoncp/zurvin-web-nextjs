import Layout from '../layout/Layout/Layout'
import { IPost } from '../interfaces/post';
import { getAllPosts } from '../libs/api'
import PostPreview from '../components/PostPreview/PostPreview';
import { getPostsFromNotion } from '../services/notion/notion.service';
import { IPostItem } from '../services/notion/interfaces/post.interface';
import PostExcerpt from '../components/PostExcerpt/PostExcerpt';

type IPostProps = {
  allPosts: IPost[]
  posts: IPostItem[]
  preview: boolean
}

export default function Index({ allPosts, posts }: IPostProps) {
  const recentPosts = allPosts?.slice(0, 2)
  const otherPosts = allPosts?.slice(2, allPosts.length)

  return (
    <Layout>
      <h2
        style={{ fontSize: '3.2rem', fontFamily: 'Poppins', fontWeight: 400 }}
        className="color-gradient"
      >
        Blog. Share.
      </h2>

      <h3 style={{ fontSize: '2rem', fontFamily: 'Poppins', fontWeight: 400, color: '#fff' }}>Artículos</h3>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
        {recentPosts?.map(post => (
          <PostPreview
            key={post.slug}
            post={post}
            showCover
          />
        ))}
      </div>

      {otherPosts?.map((post, index) => (
        <PostPreview
          key={post.slug}
          post={post}
        />
      ))}

      {posts?.map((post) => (
        <PostExcerpt
          key={post.id}
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

  const posts: IPostItem[] = await getPostsFromNotion();

  return {
    props: {
      allPosts,
      posts,
    },
    revalidate: 10,
  }
}