import Layout from '../layout/Layout/Layout'
import { getPostsFromNotion } from '../services/notion/notion.service';
import { IPostItem } from '../services/notion/interfaces/post.interface';
import PostExcerpt from '../components/PostExcerpt/PostExcerpt';

type IPostProps = {
  posts: IPostItem[]
  preview: boolean
}

export default function Index({ posts }: IPostProps) {
  return (
    <Layout>
      <h2
        style={{ fontSize: '3.2rem', fontFamily: 'Poppins', fontWeight: 400, display: "inline-block", lineHeight: "inherit" }}
        className="color-gradient"
      >
        Blog. Share.
      </h2>

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
  const posts: IPostItem[] = await getPostsFromNotion();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}