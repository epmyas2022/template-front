import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/ui/views/dashboard/DashboardView.vue'

import { applyGuards } from '@/helpers/utils'
import { AuthGuard } from './guards/auth.guard'
import { VerifyGuard } from './guards/verify.guard'
import { PathGuard } from './guards/paths.guard'
import NotFoundView from '@/ui/views/errors/NotFoundView.vue'
import RouterGlobal from '@/plugins/router-global'

const routes = RouterGlobal()

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
        children: [...routes.routesWithLayout],
      },
      ...routes.routes,
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView,
      },
    ],
  }),
  [new AuthGuard(), new PathGuard(), new VerifyGuard()],
)

export default router
