import { Post, PostApiResponse } from "./post.type"

export const mapperToPostItem = (post: PostApiResponse): Post => {
  const date = new Date(post.properties.date.date.start).toLocaleString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );

  return {
    id: post.id,
    cover: post.cover?.external?.url || null,
    icon: post.icon?.emoji || null,
    properties: {
      page: post.properties.page.title?.[0]?.text.content,
      slug: post.properties.slug.rich_text?.[0]?.text.content,
      excerpt: post.properties.excerpt.rich_text?.[0]?.text.content,
      date,
      published: post.properties.published.checkbox,
      url: post.properties.url.url,
    }
  }
}