import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

const mods = defineCollection({
  loader: file('@data/mods.yaml');
  schema: z.object({
    id: z.string(), name: z.string(), icon: z.string(), color: z.string(),
    loader: z.string(), game-version: z.string(), mod-version: z.string(),
    size: z.string(), downloads: z.number(), stars: z.number(),
    author: z.string(), date: z.string(), feat: z.array(z.string())
  });
});

export const collections = { mods };
