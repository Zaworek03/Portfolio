import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryKeys } from './i18n/ui';

const projects = defineCollection({
  loader: glob({ pattern: '*/{pl,en}.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(categoryKeys),
      date: z.coerce.date(),
      dateEnd: z.coerce.date().optional(),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()).default([]),
      role: z.string().optional(),
      duration: z.string().optional(),
      /** Film z folderu public/, np. projects/line-follower/przejazd.mp4 */
      video: z
        .object({
          src: z.string(),
          poster: image().optional(),
          caption: z.string().optional(),
        })
        .optional(),
      github: z.url().optional(),
      demo: z.url().optional(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { projects };
