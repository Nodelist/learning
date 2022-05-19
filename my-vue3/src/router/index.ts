import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import LayoutIndex from '@/layout/index/Index.vue'
import SystemIndex from '@/layout/index/Index.vue'
import SystemTest from '@/layout/test/Index.vue'

// 组件需用函数返回
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/system'
  },
  {
    path: '/system',
    name: 'System',
    // redirect: '/system/index',
    // component: () => import('../layout/index/Index.vue'),
    component: () => { return LayoutIndex },
    children: [
      {
        path: 'index',
        name: 'SystemIndex',
        // component: () => import('../views/systemModule/index/Index.vue')
        component: () => { return SystemIndex }
      },
      {
        path: 'test',
        name: 'SystemTest',
        // component: () => import('../views/systemModule/testModule/Index.vue')
        component: () => { return SystemTest }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
