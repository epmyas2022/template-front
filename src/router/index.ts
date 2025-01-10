import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/ui/views/auth/LoginView.vue'
import DashboardView from '@/ui/views/dashboard/DashboardView.vue'

import { applyGuards } from '@/helpers/utils'
import { AuthGuard } from './guards/auth.guard'
import { VerifyGuard } from './guards/verify.guard'
import { PathGuard } from './guards/paths.guard'
import WelcomeView from '@/ui/views/welcome/WelcomeView.vue'
import NotFoundView from '@/ui/views/errors/NotFoundView.vue'

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
        children: [
          {
            path: '/welcome',
            name: 'Welcome',
            component: WelcomeView,
          },
        ],
      },

      {
        path: '/login',
        name: 'Login',
        component: Login,
      },

      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView,
      },
    ],
  }),
  [new AuthGuard(), new VerifyGuard(), new PathGuard()],
)

export default router
