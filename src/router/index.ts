import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Map from '@/views/map/index.vue'
import BigMap from '@/views/BigMap/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/list',
      name: 'List',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/list/index.vue'),
    },
    {
      path: '/map',
      name: 'Map',
      component: Map,
    },
    {
      path: '/bigmap',
      name: 'bigmap',
      component: BigMap,
    },
  ],
})

export default router
