import Layout from '../layout/Layout/Layout'
import { getPostsFromNotion } from '../services/notion/notion.service';
import { IPostItem } from '../services/notion/interfaces/post.interface';
import PostExcerpt from '../components/PostExcerpt/PostExcerpt';
import Text from '../components/Text/Text';
import Stack from '../components/Stack/Stack';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

type IPostProps = {
  posts: IPostItem[]
  preview: boolean
}

export default function Index({ posts }: IPostProps) {
  return (
    <Layout>
      <Stack gap={4}>
        <div style={{ margin: "8rem 0" }}>
          <Stack gap={8}>
            <Text variant='h2' color='gray' weight={200}>
              Hi there, I'm Yerson 🤘
            </Text>
            <Text variant='h1' color='white' weight={200}>
              I'm Frontend Engineer. I build scalable and maintainable applications for different industries.
            </Text>

            <Stack gap={4} direction='row'>
              <a href="https://github.com/yersoncp" target='_blank'>
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/yerson" target='_blank'>
                <LinkedinIcon />
              </a>
            </Stack>
          </Stack>
        </div>

        <Text variant='h2' color='accent'>Blog</Text>

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
  const posts: IPostItem[] = await getPostsFromNotion(4);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}