import PostExcerpt from "../../components/PostExcerpt/PostExcerpt"
import Stack from "../../components/Stack/Stack"
import Text from "../../components/Text/Text"
import { Post } from "../../services/post/post.type"
import { getAllPosts } from "../../services/post/post.service"

type BlogProps = {
  posts: Post[]
}

export default function Index({ posts }: BlogProps) {
  return (
    <>
      <Stack gap={4}>
        <Text variant='h1' as="h1" color='accent'>Blog</Text>

        <div>
          {posts?.map((post) => (
            <PostExcerpt
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </Stack>
    </>
  )
}

export const getStaticProps = async () => {
  const posts: Post[] = await getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}