import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import rehypeToc from "rehype-toc";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "nord",
      wrap: true,
    },
  },
});
