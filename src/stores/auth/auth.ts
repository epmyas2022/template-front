import type { Auth, User } from '@/domain/shared/global/auth.type'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const auth = reactive({}) as Auth

  function setUser(user: User, isLoggedIn: boolean) {
    auth.user = user
    auth.isLoggedIn = isLoggedIn
  }

  function setToken(token: string) {
    auth.token = token
  }

  function logout() {
    auth.user = null
    auth.token = null
    auth.isLoggedIn = false
  }

  function isAuthenticated() {
    return auth.isLoggedIn
  }

  return {
    auth,
    setUser,
    setToken,
    logout,
    isAuthenticated,
  }
})
