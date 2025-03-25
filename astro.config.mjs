// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      plugins: [
        starlightSidebarTopicsDropdown([
          {
            label: "Guides",
            link: "/guides/example",
            icon: "open-book",
            items: ["guides/example"],
          },
          {
            label: "Reference",
            link: "/reference/example",
            icon: "information",
            items: ["reference/example"],
          },
          {
            id: "blog",
            label: "Blog",
            link: "/blog",
            icon: "pencil",
            items: [],
          },
        ]),
        starlightBlog({
          authors: {
            trueberryless: {
              name: "trueberryless",
              title: "Completely lost",
              picture: "https://avatars.githubusercontent.com/u/99918022?v=4",
              url: "https://trueberryless.org",
            },
            hideoo: {
              name: "HiDeoo",
              title: "Starlight Aficionado",
              picture: "https://avatars.githubusercontent.com/u/494699?s=200",
              url: "https://hideoo.dev",
            },
          },
        }),
      ],
      routeMiddleware: "./src/middleware.ts",
    }),
  ],
});
