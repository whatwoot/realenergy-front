import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuyPowerView from '@/views/BuyPowerView.vue'
import PowerView from '@/views/PowerView.vue'
import DocsView from '@/views/DocsView.vue'
import ExampleView from '@/views/ExampleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PowerView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/buypower',
      name: 'buypower',
      component: BuyPowerView,
    },
    {
      path: '/docs',
      name: 'HelpDocs',
      component: DocsView
    },
    {
      path: '/example',
      name: 'ExampleView',
      component: ExampleView
    },
  ],
})

export default router
