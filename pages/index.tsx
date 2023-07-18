import { getAllPosts } from '../services/post/post.service';
import { Post } from '../services/post/post.type';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import PostExcerpt from '../components/PostExcerpt/PostExcerpt';
import Text from '../components/Text/Text';
import Stack from '../components/Stack/Stack';
import Link from 'next/link';
import LabsGrid from '../components/LabsGrid/LabsGrid';
import { getLabs } from '../services/labs/labs.service';
import { Lab } from '../services/labs/labs.type';

type IndexProps = {
  posts: Post[]
  labs: Lab[],
  preview: boolean
}

export default function Index({ posts, labs }: IndexProps) {
  return (
    <>
      <Stack gap={12}>
        <div style={{ margin: "6rem 0" }}>
          <Stack gap={2}>
            <div>
              <Text variant='h2' color='gray' weight={200} as="h1">
                Hi, I'm Yerson 🤘
              </Text>
              <Text variant='h1' color='white' weight={200} as="h2">
                I'm Frontend Engineer. I build scalable and maintainable web applications for different industries.
              </Text>
            </div>

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

        <Stack gap={4}>
          <Text variant='h2' color='white'>Labs</Text>
          <LabsGrid labs={labs} />
        </Stack>

        <Stack gap={4}>
          <Text variant='h2' color='white'>Blog</Text>

          <div>
            {posts?.map((post) => (
              <PostExcerpt
                key={post.id}
                post={post}
              />
            ))}
          </div>

          <Link href="/blog">
            More articles →
          </Link>
        </Stack>
      </Stack>
    </>
  )
}

export const getStaticProps = async () => {
  const posts: Post[] = await getAllPosts(6);
  const labs = await getLabs();

  return {
    props: {
      posts,
      labs,
    },
    revalidate: 10,
  }
}