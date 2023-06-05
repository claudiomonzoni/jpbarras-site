import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
// import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // site: 'https://jpbarras.ch',
  // output: "server",
  // adapter: netlify(),
  integrations: [astroI18next(), react()],
});
