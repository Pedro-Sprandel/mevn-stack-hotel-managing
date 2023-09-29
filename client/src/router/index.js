import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reserva',
      name: 'reserva',
      component: () => import('../views/ReservaView.vue')
    },
    {
      path: '/check-in',
      name: 'check-in',
      component: () => import('../views/CheckinView.vue')
    },
    {
      path: '/check-out',
      name: 'check-out', 
      component: () => import('../views/CheckoutView.vue')
    }
  ]
})

export default router
