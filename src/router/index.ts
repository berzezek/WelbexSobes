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
    }
  ]
})

export default router
