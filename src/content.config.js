import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

const resourceTypes = defineCollection({
  loader: file('src/data/resourceTypes.yaml'),
  schema: z.object({
    id: z.enum(['mods']),
    order: z.number(),
    label: z.string(),
    description: z.string(),
  }),
});

const mods = defineCollection({
  loader: file('src/data/mods.yaml'),
  schema: z.object({
    id: z.string(), name: z.string(), icon: z.string(), color: z.string(),
    loader: z.string(), gameVersion: z.string(), modVersion: z.string(),
    size: z.string(), downloads: z.number(), stars: z.number(),
    author: z.string(), date: z.string(), feat: z.array(z.string())
  }),
});

const quiz = defineCollection({
  loader: file('src/data/quiz.yaml'),
  schema: z.object({
    id: z.string(),
    question: z.string(),
    options: z.array(z.string()).min(2),
    answer: z.number().int().min(0),
    explanation: z.string(),
  }),
});

export const collections = { resourceTypes, mods, modpacks, texturepacks, quiz };
