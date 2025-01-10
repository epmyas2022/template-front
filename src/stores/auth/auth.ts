import type { Auth, User } from '@/domain/shared/types'
import type { PrimitivePath } from '@/domain/user/entities/path.entity'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const auth = reactive({
    paths: [],
  }) as Auth

  function setUser(user: User, isLoggedIn: boolean) {
    auth.user = user
    auth.isLoggedIn = isLoggedIn
  }

  function setToken(token: string) {
    auth.token = token
    localStorage.setItem('token', token)
  }

  function setPaths(paths: PrimitivePath[]) {
    auth.paths = paths
  }

  function logout() {
    auth.user = null
    auth.token = null
    auth.isLoggedIn = false
    auth.paths = []
    localStorage.removeItem('token')
  }

  function isAuthenticated() {
    return auth.isLoggedIn || !!localStorage.getItem('token')
  }

  return {
    auth,
    setUser,
    setToken,
    setPaths,
    logout,
    isAuthenticated,
  }
})
