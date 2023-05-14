import { getBlocks, getDatabase, getPage } from "../../libs/notion";
import { IPostItemApiResponse } from "./interfaces/post.interface";
import { mapperToPostItem } from "./notion.mapper";

export const getPostsFromNotion = async () => {
  const posts = await getDatabase() as unknown as IPostItemApiResponse[];

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
