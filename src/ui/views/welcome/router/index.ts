import type { RouteRecordRaw } from 'vue-router'
import WelcomeView from '../WelcomeView.vue'

export default [
  {
    meta: {
      withLayoutDashboard: true,
    },
    path: '/welcome',
    name: 'Welcome',
    component: WelcomeView,
  },
] as RouteRecordRaw[]
