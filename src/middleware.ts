import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware(async (context, next) => {
  await next();
  try {
    const currentModeKey = Symbol.for("starlight-view-modes-current-mode");
    const { entry } = context.locals.starlightRoute;

    const currentMode = context.locals.starlightRoute[currentModeKey];

    if (currentMode != "default") {
      entry.data.topic = // get the default topic;
    }
  } catch (e) {}
});
