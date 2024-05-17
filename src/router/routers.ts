import { RouteRecordRaw } from 'vue-router';

const Login = () => import('@/views/login/login.vue');
const Home = () => import('@/views/home/home.vue');

/* 子路由 */
const HomeChildren: RouteRecordRaw[] = [];

export const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: HomeChildren
  },
  /* 重定向到首页 */
  {
    path: '/:catchAll(.*)',
    redirect: '/home'
  }
];
