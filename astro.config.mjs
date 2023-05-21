import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
// import { websiteUrl } from "./src/config";

export const websiteUrl = "https://gianmarco.xyx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    solidJs(),
    mdx({ draft: true }),
  ],
  site: websiteUrl,
});
