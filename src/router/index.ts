import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/ui/views/auth/LoginView.vue'
import DashboardView from '@/ui/views/dashboard/DashboardView.vue'
import { accessGuard } from './guards/access.guard'
import { pathsGuard } from './guards/paths.guard'
import { applyGuards } from '@/helpers/utils'
import { verifyGuard } from './guards/verify.guard'

const router = applyGuards(
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'Dashboard',
        component: DashboardView,
        meta: {
          requiresAuth: true,
        },
      },

      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
    ],
  }),
  [accessGuard, verifyGuard, pathsGuard],
)

export default router
