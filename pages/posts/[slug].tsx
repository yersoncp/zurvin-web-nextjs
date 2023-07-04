import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { getBlocksBySlug, getPageBySlug, getPostsFromNotion } from '../../services/notion/notion.service'
import PostContent from '../../components/PostContent/PostContent'

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

          <h1 style={{
            fontSize: "2.2rem", padding: "1.5rem 0", lineHeight: "3rem"
          }}>
            {page.properties.page.title[0].plain_text}
          </h1>

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
  const database = await getPostsFromNotion();

  return {
    paths: database.map((page) => ({ params: { slug: page.properties.slug } })),
    fallback: true,
  };

}