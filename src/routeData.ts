import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  const { modes } = context.locals.starlightViewModes;
  const { topics } = context.locals.starlightSidebarTopics;
  const currentMode = modes.find((mode) => mode.isCurrent)!;

  if (currentMode.name !== "default") {
    topics.map((topic) => {
      topic.link = insertSegment(topic.link, currentMode.name, 0);
    });
  }
});

function insertSegment(path: string, segment: string, position: number) {
  const hasLeadingSlash = path.startsWith("/");
  const hasTrailingSlash = path.endsWith("/");

  const parts = path
    .split("/")
    .filter((part, index, arr) => part !== "" || (index === 0 && !hasLeadingSlash) || (index === arr.length - 1 && !hasTrailingSlash));

  parts.splice(position, 0, segment);

  let result = parts.join("/");

  if (hasLeadingSlash) result = "/" + result;
  if (hasTrailingSlash) result += "/";

  return result;
}
