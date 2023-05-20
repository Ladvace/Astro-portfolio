import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      link: z.string(),
      img: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
      image: z.string().optional(),
    }),
  });

export const collections = { blog };