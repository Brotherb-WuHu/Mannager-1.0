import localCache from '@/utils/cache'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    // 我们这里不用跳转到 /login，因为如果有登录信息则直接进，没有则重定向至 /login
    // 在下面的 router.beforeEach 导航守卫 写这些吧！
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue'),
    children: [
      {
        path: '/page1',
        component: () => import('@/views/Demo/page1.vue')
      },
      {
        path: '/page2',
        component: () => import('@/views/Demo/page2.vue')
      },
      {
        path: '/page3',
        component: () => import('@/views/Demo/page3.vue')
      },
      {
        path: '/page4',
        component: () => import('@/views/Demo/page4.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// 判断是否登录，重定向导航的导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
