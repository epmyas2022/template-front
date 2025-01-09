import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router'
import { useAuthStore } from '@/stores/auth/auth'
import { VerifyAuthUseCase } from '@/provider'
import type { Guard } from '@/domain/shared/interfaces'

export class VerifyGuard implements Guard {
  async execute(
    _to: RouteLocationNormalizedGeneric,
    _from: RouteLocationNormalizedLoadedGeneric,
    next: NavigationGuardNext,
  ): Promise<void> {
    try {
      const authStore = useAuthStore()

      const userVerify = await VerifyAuthUseCase.execute()

      authStore.setUser(userVerify.toValue(), true)

      next()
    } catch (error) {
      console.log(error)
      next({ name: 'Login' })
    }
  }
}
