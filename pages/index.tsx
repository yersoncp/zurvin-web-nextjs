import Layout from '../layout/Layout/Layout'
import { getPostsFromNotion } from '../services/notion/notion.service';
import { IPostItem } from '../services/notion/interfaces/post.interface';
import PostExcerpt from '../components/PostExcerpt/PostExcerpt';
import Text from '../components/Text/Text';
import Stack from '../components/Stack/Stack';
import { VSCodeIcon, GithubIcon, LinkedinIcon } from '../components/Icons';

type IPostProps = {
  posts: IPostItem[]
  preview: boolean
}

export default function Index({ posts }: IPostProps) {
  return (
    <Layout>
      <Stack gap={4}>
        <div style={{ margin: "4rem 0" }}>
          <Stack gap={3}>
            <Text variant='h1' color='white'>Yerson</Text>
            <Text variant='h2' color='white'>Frontend Engineer 🤘</Text>

            <Stack gap={1}>
              <Text variant='body' color='gray'>
                <VSCodeIcon /> 345 hours coding on 2023
              </Text>
              <Text variant='body' color='gray'>
                <GithubIcon /> <a href="https://github.com/yersoncp" target='_blank'>yersoncp</a>
              </Text>
              <Text variant='body' color='gray'>
                <LinkedinIcon /> <a href="https://www.linkedin.com/in/yerson" target='_blank'>yerson</a>
              </Text>
            </Stack>
          </Stack>
        </div>

        <Stack gap={2}>
          <Text variant='h2' color='accent'>Artículos</Text>
          <Text variant='body' color='gray'>#react · #life</Text>
        </Stack>

        <div>
          {posts?.map((post) => (
            <PostExcerpt
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </Stack>
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