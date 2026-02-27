import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.enum(['technologie', 'zdraví', 'tipy', 'srovnání']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
