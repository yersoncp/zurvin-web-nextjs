import PostExcerpt from "../../components/PostExcerpt/PostExcerpt"
import Stack from "../../components/Stack/Stack"
import Text from "../../components/Text/Text"
import { IPostItem } from "../../services/notion/interfaces/post.interface"
import { getPostsFromNotion } from "../../services/notion/notion.service"

type IPostProps = {
  posts: IPostItem[]
  preview: boolean
}

export default function Index({ posts }: IPostProps) {
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
  const posts: IPostItem[] = await getPostsFromNotion();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}