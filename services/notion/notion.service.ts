import { getDatabase } from "../../libs/notion";
import { IPostItemApiResponse } from "./interfaces/post.interface";
import { mapperToPostItem } from "./notion.mapper";

export const getPostsFromNotion = async () => {
  const posts = await getDatabase() as unknown as IPostItemApiResponse[];

  return posts
    .filter(post => post.properties.published.checkbox)
    .map((post) => mapperToPostItem(post))
}