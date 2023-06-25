import Layout from '../layout/Layout/Layout'
import { getPostsFromNotion } from '../services/notion/notion.service';
import { IPostItem } from '../services/notion/interfaces/post.interface';
import PostExcerpt from '../components/PostExcerpt/PostExcerpt';
import Text from '../components/Text/Text';

type IPostProps = {
  posts: IPostItem[]
  preview: boolean
}

export default function Index({ posts }: IPostProps) {
  return (
    <Layout>
      <div style={{ margin: "5rem 0" }}>
        <h2 style={{
          fontSize: '2.8rem',
          lineHeight: "inherit", color: "white",
        }}>
          Yerson
        </h2>
        <div style={{ lineHeight: "inherit", fontSize: "1.25rem" }}>
          👨‍💻 Frontend Engineer
        </div>
        
      </div>

      <Text>
        Artículos
        <div style={{
          color: "#888",
          fontWeight: 400,
          fontSize: "1.2rem",
          margin: ".5rem 0"
        }}>#react · #life</div>
      </Text>

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