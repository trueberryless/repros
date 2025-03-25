// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightViewModes from "starlight-view-modes";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Starlight View Modes Plus Starlight Sidebar Topics",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      plugins: [
        starlightViewModes({
          zenModeSettings: {
            displayOptions: {
              showSidebar: true,
              showHeader: true,
              showTableOfContents: false,
            },
          },
        }),
        starlightSidebarTopics([
          {
            id: "guides",
            label: "Guides",
            link: "/guides/example",
            icon: "open-book",
            items: ["guides/example"],
          },
          {
            id: "refernece",
            label: "Reference",
            link: "/reference/example",
            icon: "information",
            items: ["reference/example"],
          },
        ]),
      ],
      routeMiddleware: "./src/routeData.ts",
    }),
  ],
});
