import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://pm-course.ayushsaran3422.workers.dev",
  integrations: [mdx()],

  markdown: {
    shikiConfig: {
      theme: "github-light",
      themes: {
        light: "github-light",
        dark: "github-dark"
      }
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});