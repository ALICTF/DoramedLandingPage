// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('تیم تحریریه دورامد'),
    
    image: image(), 
    
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};