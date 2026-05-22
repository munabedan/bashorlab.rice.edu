import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const publications = defineCollection({
  loader: file("src/assets/content/publications.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.string(),
    page: z.string(),
    url: z.string().optional(),       // Made optional in case a PDF isn't available
    videoUrl: z.string().optional(),  // Added for your video links
    features: z.array(                // Added for your nested feature lists/links
      z.object({
        text: z.string(),
        url: z.string().optional()    // Optional link for the specific feature mention
      })
    ).optional()                      // Optional overall, as not all entries have features
  }),
});


const members = defineCollection({
  loader: file("src/assets/content/members.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    occupation: z.string(),
    distinction: z.string(),
    avatar: z.string(),
  }),
});


const alumni = defineCollection({
  loader: file("src/assets/content/alumni.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    occupation: z.string(),
    distinction: z.string(),
    avatar: z.string(),
  }),
});
export const collections = { publications, members,alumni };