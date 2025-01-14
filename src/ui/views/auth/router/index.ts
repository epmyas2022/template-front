import type { RouteRecordRaw } from 'vue-router'
import LoginView from '../LoginView.vue'

export default [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },

  /*   {
    meta: {
      withLayoutDashboard: true,
      exceptGuards: ['PathGuard'],
    },
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
  }, */
] as RouteRecordRaw[]
