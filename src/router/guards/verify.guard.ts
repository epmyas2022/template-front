import type { Router } from 'vue-router'
import { useAuthStore } from '@/stores/auth/auth'
import { VerifyAuthUseCase } from '@/provider'

export function verifyGuard(router: Router): Router {
  router.beforeEach(async (_to, _from, next) => {
    try {
      const authStore = useAuthStore()

      const userVerify = await VerifyAuthUseCase.execute()

      authStore.setUser(userVerify.toValue(), true)

      next()
    } catch (error) {
      console.log(error)
      next({ name: 'Login' })
    }
  })
  return router
}
