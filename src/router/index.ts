import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";
import { basicRoutes } from "./routers"; // Add the missing import statement for "./routes"

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
