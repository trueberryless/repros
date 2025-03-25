declare namespace App {
  type StarlightLocals = import("@astrojs/starlight").StarlightLocals;
  interface Locals extends StarlightLocals {
    /**
     * Starlight Route Data Test data.
     */
    starlightRouteDataTest: import("./data").StarlightRouteDataTest;
  }
}
