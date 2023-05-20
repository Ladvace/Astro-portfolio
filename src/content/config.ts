import { z, defineCollection } from 'astro:content';
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    draft: z.boolean().optional(),
    description: z.string().max(160, 'Short descriptions have better SEO!').optional(),
    tags: z.array(z.string()).optional(),
    img: z.object({
      url: z.string(),
      alt: z.string(),
    })
  }),
});

export const collections = { blog };