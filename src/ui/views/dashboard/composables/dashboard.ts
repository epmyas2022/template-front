import {} from '@tabler/icons-vue'
import { useAuthStore } from '@/stores/auth/auth'

export function useDashboard() {
  const authStore = useAuthStore()

  const { paths: menu } = authStore.auth

  return {
    menu,
  }
}
