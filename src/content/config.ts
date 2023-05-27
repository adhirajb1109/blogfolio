import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    banner: z.string().optional(),
    draft: z.boolean(),
  }),
});

export const collections = {
  posts: postsCollection,
};
