// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
      plugins: [
        {
          name: "starlight-route-data-test",
          hooks: {
            "config:setup": ({ addRouteMiddleware, addIntegration }) => {
              addRouteMiddleware({
                entrypoint: "./src/routeData.ts",
                order: "pre",
              });
              addIntegration({
                name: "starlight-route-data-test-integration",
                hooks: {
                  "astro:config:setup": ({ injectRoute }) => {
                    injectRoute({
                      entrypoint: `./src/components/NewRoute.astro`,
                      pattern: "/some-mode/[...path]",
                      prerender: true,
                    });
                  },
                },
              });
            },
          },
        },
      ],
    }),
  ],
});
