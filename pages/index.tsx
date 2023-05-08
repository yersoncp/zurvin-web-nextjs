import Layout from '../layout/Layout/Layout'
import { IPost } from '../interfaces/post';
import { getAllPosts } from '../libs/api'
import PostPreview from '../components/PostPreview/PostPreview';
import { getDatabase } from '../libs/notion';
import Link from 'next/link';
import { getPostsFromNotion } from '../services/notion/notion.service';
import { PostType } from '../services/notion/types/post.interface';

type IPostProps = {
  allPosts: IPost[]
  posts: PostType[]
  preview: boolean
}

export default function Index({ allPosts, posts }: IPostProps) {
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

      <h2>All Posts</h2>
        <ol>
          {posts?.map((post) => {
            const date = new Date(post.properties.date.date.start).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id}>
                <h3>
                  <Link href={`/${post.id}`}>
                    {post.properties.page.title[0].text.content}
                  </Link>
                </h3>

                <p>{date}</p>
                <Link href={`/${post.id}`}>Read post →</Link>
              </li>
            );
          })}
        </ol>

    </Layout>
  )
}

export const getStaticProps = async ({ preview }) => {
  let posts = []
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  // Start
  try {
    posts = await getPostsFromNotion();
    console.log(11, posts)
  } catch (error) {
    console.log(12, error)
  }
  // End

  return {
    props: {
      preview: preview || false,
      allPosts,
      posts,
    },
    revalidate: 10,
  }
}