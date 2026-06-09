import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

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

const about = defineCollection({
  loader: glob({ pattern: 'about.json', base: "src/assets/content/" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const research = defineCollection({
  loader: glob({ 
    pattern: 'research.json', 
    base: './src/assets/content' 
  }),
  schema: z.object({
    mainTitle: z.string(),
    sections: z.array(
      z.object({
        heading: z.string(),
        content: z.string(),
      })
    ),
  }),
});

const contact = defineCollection({
  loader: glob({ 
    pattern: 'contact.json', 
    base: './src/assets/content' 
  }),
  schema: z.object({
    title: z.string(),
    email: z.string().email(), 
    phone: z.string(),
    address: z.string(),
  }),
});

export const collections = { publications, members, alumni, about, research, contact};