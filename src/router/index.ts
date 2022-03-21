import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/** 公共路由 */
const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layouts/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
})

export default router
