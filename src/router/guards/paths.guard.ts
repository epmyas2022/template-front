import type { Guard } from '@/domain/shared/interfaces'
import type { PrimitivePath } from '@/domain/user/entities/path.entity'
import { PathsUseCase } from '@/provider'
import { useAuthStore } from '@/stores/auth/auth'
import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router'

function canAccess(paths: PrimitivePath[], to: string): boolean {
  return paths.some((route) => {
    if (route.children && route.children.length > 0) canAccess(route.children, to)

    const regex = new RegExp(`^${route.path.replace(/:\w+/g, '([a-zA-Z0-9]+)')}$`)

    return regex.test(to)
  })
}
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
