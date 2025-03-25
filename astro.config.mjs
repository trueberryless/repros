// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Starlight Page Head Image Broken Repro",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: ["example-working", "example-broken"],
    }),
  ],
});
