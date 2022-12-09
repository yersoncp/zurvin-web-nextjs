import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../libs/api'
import Head from 'next/head'
import markdownToHtml from '../../libs/mdToHtml'
import type PostType from '../../interfaces/post'
import Layout from '../../layout/Layout/Layout'
import PostTitle from '../../components/PostTitle/PostTitle'
import PostBody from '../../components/PostBody/PostBody'
import PostHeader from '../../components/PostHeader/PostHeader'

type Props = {
    post: PostType
    morePosts: PostType[]
    preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout preview={preview}>
            {router.isFallback ? (
                <PostTitle>Loading…</PostTitle>
            ) : (
                <>
                    <article className="mb-32">
                        <Head>
                            <title>
                                {post.title} | Zurvin
                            </title>
                            <meta property="og:image" content={post.ogImage.url} />
                        </Head>
                        <PostHeader
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            author={post.author}
                        />
                        <PostBody content={post.content} />
                    </article>
                </>
            )}
        </Layout>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}