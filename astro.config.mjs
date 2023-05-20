import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import netlify from "@astrojs/netlify/functions";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), solidJs(), mdx({ draft: true })],
  site: "https://gianmarco.xyz",
  output: "server",
  outDir: "/dist",
  adapter: netlify({
    dir: "/dist",
  }),
});
