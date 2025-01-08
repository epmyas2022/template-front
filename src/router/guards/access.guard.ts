import { useAuthStore } from '@/stores/auth/auth'
import type { Router } from 'vue-router'

export function accessGuard(router: Router): Router {
  router.beforeEach((to, _from, next) => {
    const authStore = useAuthStore()

    const { isAuthenticated } = authStore

    if (to.name === 'Login' && isAuthenticated()) next({ name: 'Dashboard' })
    else if (to.meta.requiresAuth && !isAuthenticated()) next({ name: 'Login' })
    else next()
  })

  return router
}
