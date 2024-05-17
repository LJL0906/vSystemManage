import { createRouter, createWebHashHistory } from 'vue-router';
import type { App } from 'vue';
import { basicRoutes } from './routers'; // Add the missing import statement for "./routes"

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes
});

router.beforeEach(to => {
  // 设置标签标题
  const title = (to?.meta?.title as string) ?? 'findYourLife';
  document.title = title;
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
