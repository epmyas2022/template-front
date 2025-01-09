import type { Guard } from '@/domain/shared/interfaces'
import { canAccess } from '@/helpers/utils'
import { PathsUseCase } from '@/provider'
import { useAuthStore } from '@/stores/auth/auth'
import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router'

export class PathGuard implements Guard {
  async execute(
    to: RouteLocationNormalizedGeneric,
    _from: RouteLocationNormalizedLoadedGeneric,
    next: NavigationGuardNext,
  ): Promise<void> {
    const authStore = useAuthStore()

    const paths = authStore.auth.paths

    if (paths.length === 0) {
      const paths = await PathsUseCase.execute()
      authStore.setPaths(paths)
    }

    if (!canAccess(paths, to.path)) return next({ name: 'NotFound' })

    next()
  }
}
