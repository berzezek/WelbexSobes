import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('@/views/MainPage.vue')
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: () => import('@/views/AboutPage.vue')
    },
    {
        path: '/composition',
        name: 'WelbexComposition',
        component: () => import('@/views/WelbexComposition.vue')
    }
  ]
})

export default router
