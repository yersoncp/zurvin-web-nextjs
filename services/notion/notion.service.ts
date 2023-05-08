import { PostType } from "./types/post.interface";
import { getDatabase } from "../../libs/notion";

export const getPostsFromNotion = async () => {
  const posts = await getDatabase() as unknown as PostType[];

  return posts.filter(post => post.properties.published.checkbox)
}