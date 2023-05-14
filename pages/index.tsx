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
      <h2 style={{
        fontSize: '2.8rem', display: "inline-block",
        lineHeight: "inherit", color: "white"
      }}>
        Blog. Share.
      </h2>
      
      <div style={{
        color: "#888",
        fontWeight: 400,
        paddingBottom: "2rem"
      }}>#react · #life</div>

      <Text>
        Artículos
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