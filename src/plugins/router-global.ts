import type { RouteRecordRaw } from 'vue-router'

export default function RouterGlobal(): {
  routes: RouteRecordRaw[]
  routesWithLayout: RouteRecordRaw[]
} {
  const modules = import.meta.glob('@/ui/views/**/router/*.ts', { eager: true })

  if (!modules) return { routes: [], routesWithLayout: [] }

  const routesWithLayout: RouteRecordRaw[] = []

  const routes: RouteRecordRaw[] = []

  for (const path in modules) {
    const module = modules[path] as { default: RouteRecordRaw[] }

    const router = module.default

    if (!router || !(router instanceof Array)) continue

    router.forEach((route) => {
      if (!(route.name && route.path && route.component)) return

      if (route.meta?.withLayoutDashboard) return routesWithLayout.push(route)

      return routes.push(route)
    })
  }

  return { routes, routesWithLayout }
}
