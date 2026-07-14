import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
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