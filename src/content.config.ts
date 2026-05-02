import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const publications = defineCollection({
  loader: file("src/assets/publications/data.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.string(),
    pdf_file: z.string(), // This points to the filename in src/assets/publications/pdfs/
  }),
});


const members = defineCollection({
  loader: file("src/assets/members/data.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    occupation: z.string(),
    distinction: z.string(),
    avatar: z.string(),
  }),
});

export const collections = { publications, members };