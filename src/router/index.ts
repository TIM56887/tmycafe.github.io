import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Map from '@/views/map/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  ],
})

export default router
