import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Layout from '../../layout/Layout/Layout'
import { getBlocks, getPage } from '../../libs/notion'
import { getPostsFromNotion } from '../../services/notion/notion.service'
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
    <Layout>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <article>
          <Head>
            <title>{page.properties.page.title[0].plain_text} | Zurvin</title>
            <meta property="og:image" content={page.cover?.external?.url} />
          </Head>

          <h1 style={{
            fontSize: "2.4rem", fontWeight: 400, padding: "1rem 0", lineHeight: "3.6rem"
          }}>
            {page.properties.page.title[0].plain_text}
          </h1>

          <PostContent blocks={blocks} />
        </article>
      )}
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

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
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };

}