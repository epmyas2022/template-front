import type { Guard } from '@/domain/shared/interfaces'
import type { PrimitivePath } from '@/domain/user/entities/path.entity'
import type { Router } from 'vue-router'

import { useToast, type PluginOptions } from 'vue-toastification'

const toast = useToast()

export const applyGuards = (router: Router, guards: Guard[]) => {
  guards.forEach((guard) => router.beforeEach((to, from, next) => guard.execute(to, from, next)))
  return router
}

export const canAccessPath = (paths: PrimitivePath[], to: string): boolean => {
  return paths.some((route) => {
    if (route.children && route.children.length > 0) return canAccessPath(route.children, to)

    const regex = new RegExp(`^${route.path.replace(/:\w+/g, '([a-zA-Z0-9]+)')}$`)

    return regex.test(to)
  })
}

export const alertError = (message: string | Error, options?: PluginOptions) => {
  if (message instanceof Error) return toast.error(message.message, options)

  toast.error(message, options)
}

export const alertSuccess = (message: string, options?: PluginOptions) => {
  toast.success(message, options)
}
