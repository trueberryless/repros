import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

import type { StarlightRouteDataTest } from "./data.ts";

export const onRequest = defineRouteMiddleware(async (context) => {
  context.locals.starlightRouteDataTest = {
    currentMode: context.locals.starlightRoute.id.includes("some-mode") ? "some-mode" : "default",
  } as StarlightRouteDataTest;

  console.log(context.locals.starlightRouteDataTest);
});
