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

export const collections = { publications };