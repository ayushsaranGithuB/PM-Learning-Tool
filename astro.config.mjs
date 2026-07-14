import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

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
  }
});
