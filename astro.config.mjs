import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://vipinmishra.dev",
  server: { port: 3000, host: true },
  markdown: {
    syntaxHighlight: "prism",
    drafts: true,
  },
  integrations: [react(), sitemap()],
});
