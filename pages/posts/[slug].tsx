import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { getBlocksBySlug, getPageBySlug, getAllPosts } from '../../services/post/post.service'
import PostContent from '../../components/PostContent/PostContent'
import Text from '../../components/Text/Text'

type PostProps = {
  page: any
  blocks: any
}

export default function Post({ page, blocks }: PostProps) {
  const router = useRouter()

  if (!router.isFallback && !page || !blocks) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <article>
          <Head>
            <title>{page.properties.page.title[0].plain_text} | Zurvin</title>
            <meta property="og:image" content={page.cover?.external?.url} />
          </Head>

          <div style={{ marginBottom: '3rem' }}>
            <Text color='gray'>BLOG</Text>
            <Text variant='h2' as='h1' color='white'>
              {page.properties.page.title[0].plain_text}
            </Text>
          </div>

          <PostContent blocks={blocks} />
        </article>
      )}
    </>
  )
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const page = await getPageBySlug(slug);
  const blocks = await getBlocksBySlug(slug);

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 1,
  };
}

export const getStaticPaths = async () => {
  const database = await getAllPosts();

  return {
    paths: database.map((page) => ({ params: { slug: page.properties.slug } })),
    fallback: true,
  };

}