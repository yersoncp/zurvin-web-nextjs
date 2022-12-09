import Layout from '../layout/Layout/Layout'
import Portfolio from '../components/Portfolio/Portfolio'
import Project from '../components/Project/Project';
import Stack from '../components/Stack/Stack';
import Profile from '../components/Profile/Profile';

import Post from '../interfaces/post'
import { getAllPosts } from '../libs/api'
import PostPreview from '../components/PostPreview/PostPreview';

type Props = {
   allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
   return (
    <Layout>
      <h2 className="color-gradient">Blog</h2>

      {allPosts?.map(post => (
        <PostPreview
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
   </Layout>
   )
 }
 
 export const getStaticProps = async () => {
   const allPosts = getAllPosts([
     'title',
     'date',
     'slug',
     'author',
     'coverImage',
     'excerpt',
   ])
 
   return {
     props: { allPosts },
   }
 }