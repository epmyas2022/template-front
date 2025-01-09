import type { Guard } from '@/domain/shared/interfaces'
import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router'

export class PathGuard implements Guard {
  execute(
    to: RouteLocationNormalizedGeneric,
    from: RouteLocationNormalizedLoadedGeneric,
    next: NavigationGuardNext,
  ): void {
    console.log(to, from, next)

    next()
  }
}
