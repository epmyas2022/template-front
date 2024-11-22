import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/ui/views/auth/LoginView.vue'
import DashboardView from '@/ui/views/dashboard/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
})

export default router
