import type { Router } from 'vue-router'

export function pathsGuard(router: Router): Router {
  router.beforeEach((to, from, next) => {
    console.log(to, from, next)

    next()
  })
  return router
}
