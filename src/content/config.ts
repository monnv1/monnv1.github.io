import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('技术学习'),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
