import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

// Tekst som finnes på begge språk: { no: '…', en: '…' }
const localized = z.object({ no: z.string(), en: z.string() });

const resourceTypes = defineCollection({
  loader: file('src/data/resourceTypes.yaml'),
  schema: z.object({
    id: z.enum(['mods']),
    order: z.number(),
    label: localized,
    description: localized,
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
    order: z.number(),
    question: localized,
    options: z.array(localized).min(2),
    answer: z.number().int().min(0),
    explanation: localized,
  }),
});

export const collections = { resourceTypes, mods, quiz };
