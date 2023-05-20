import rss from "@astrojs/rss";
import { blogInfo } from "../utils/rss";
import { getCollection } from "astro:content";

export async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: blogInfo.title,
    description: blogInfo.description,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      publishDate: post.data.publishDate,
      description: post.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
  });
}
