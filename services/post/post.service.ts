import { getBlocks, getDatabase, getPage } from "../../libs/notion";
import { PostApiResponse } from "./post.type";
import { mapperToPostItem } from "./post.mapper";

export const getPostsFromNotion = async (page?: number) => {
  const posts: PostApiResponse[] = await getDatabase({
    pageSize: page,
    databaseId: process.env.NOTION_POSTS_DATABASE_ID,
    sorts: [
      {
        property: "date",
        direction: "descending"
      }
    ]
  });

  return posts
    .filter(post => post.properties.published.checkbox)
    .map((post) => mapperToPostItem(post))
}

export const getPageBySlug = async (slug: string) => {
  const posts = await getPostsFromNotion()
  const postBySlug = posts.find((post) => post.properties.slug === slug)

  return await getPage(postBySlug.id)
}

export const getBlocksBySlug = async (slug: string) => {
  const posts = await getPostsFromNotion()
  const postBySlug = posts.find((post) => post.properties.slug === slug)

  return await getBlocks(postBySlug.id)
}
