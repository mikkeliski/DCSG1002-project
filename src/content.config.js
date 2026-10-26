import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

const mods = defineCollection({
  loader: file('src/data/mods.yaml'),
  schema: z.object({
    id: z.string(), name: z.string(), icon: z.string(), color: z.string(),
    loader: z.string(), gameVersion: z.string(), modVersion: z.string(),
    size: z.string(), downloads: z.number(), stars: z.number(),
    author: z.string(), date: z.string(), feat: z.array(z.string())
  }),
});

const modpacks = defineCollection({
  loader: file('src/data/modpacks.yaml'),
  schema: z.object({
    id: z.string(), name: z.string(), icon: z.string(), color: z.string(),
    loader: z.string(), gameVersion: z.string(), modpackVersion: z.string(),
    size: z.string(), downloads: z.number(), stars: z.number(),
    author: z.string(), date: z.string(), feat: z.array(z.string())
  }),
});

const texturepacks = defineCollection({
  loader: file('src/data/texturepacks.yaml'),
  schema: z.object({
    id: z.string(), name: z.string(), icon: z.string(), color: z.string(),
    gameVersion: z.string(), modVersion: z.string(), size: z.string(),
    downloads: z.number(), stars: z.number(), author: z.string(),
    date: z.string(), feat: z.array(z.string())
  }),
});

export const collections = { mods, modpacks, texturepacks };
