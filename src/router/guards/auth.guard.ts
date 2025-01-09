import { useAuthStore } from '@/stores/auth/auth'
import type { Guard } from '@/domain/shared/interfaces'
import type {
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
  NavigationGuardNext,
} from 'vue-router'

export class AuthGuard implements Guard {
  execute(
    to: RouteLocationNormalizedGeneric,
    _from: RouteLocationNormalizedLoadedGeneric,
    next: NavigationGuardNext,
  ): void {
    const authStore = useAuthStore()

    const { isAuthenticated } = authStore

    if (to.name === 'Login' && isAuthenticated()) next({ name: 'Dashboard' })
    else if (to.meta.requiresAuth && !isAuthenticated()) next({ name: 'Login' })
    else next()
  }
}
