import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const categories = {
  robotyka: 'Robotyka',
  elektronika: 'Elektronika',
  cad: 'CAD / Mechanika',
  embedded: 'Embedded',
  automatyka: 'Automatyka',
} as const;

const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(Object.keys(categories) as [keyof typeof categories, ...(keyof typeof categories)[]]),
      date: z.coerce.date(),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()).default([]),
      role: z.string().optional(),
      duration: z.string().optional(),
      github: z.url().optional(),
      demo: z.url().optional(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { projects };
