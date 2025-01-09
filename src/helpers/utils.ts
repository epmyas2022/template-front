import type { Guard } from '@/domain/shared/interfaces'
import type { Router } from 'vue-router'

import { useToast, type PluginOptions } from 'vue-toastification'

const toast = useToast()

export const applyGuards = (router: Router, guards: Guard[]) => {
  guards.forEach((guard) => router.beforeEach((to, from, next) => guard.execute(to, from, next)))
  return router
}

export const alertError = (message: string | Error, options?: PluginOptions) => {
  if (message instanceof Error) return toast.error(message.message, options)

  toast.error(message, options)
}

export const alertSuccess = (message: string, options?: PluginOptions) => {
  toast.success(message, options)
}
