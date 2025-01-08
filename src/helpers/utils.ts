import type { Router } from 'vue-router'

import { useToast, type PluginOptions } from 'vue-toastification'

const toast = useToast()

export const applyGuards = (router: Router, guards: ((router: Router) => Router)[]) => {
  guards.forEach((guard) => (router = guard(router)))
  return router
}

export const alertError = (message: string | Error, options?: PluginOptions) => {
  if (message instanceof Error) return toast.error(message.message, options)

  toast.error(message, options)
}

export const alertSuccess = (message: string, options?: PluginOptions) => {
  toast.success(message, options)
}
