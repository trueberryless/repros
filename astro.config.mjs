// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import starlightVideos from "starlight-videos";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [],
      plugins: [starlightBlog(), starlightVideos()],
      components: {
        MarkdownContent: "./src/components/MarkdownContent.astro",
      },
    }),
  ],
});
