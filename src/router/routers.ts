import { RouteRecordRaw } from 'vue-router';

const Login = () => import('@/views/login/login.vue');

export const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  }
];
