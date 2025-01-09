import { LoginUseCase } from '@/provider'
import { loginSchema } from '../validation/login.schema'
import { reactive } from 'vue'
import { alertError, alertSuccess } from '@/helpers/utils'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth/auth'
import { POSITION } from 'vue-toastification'

export function useLogin() {
  const credentials = reactive({
    username: '',
    password: '',
  })

  const router = useRouter()

  const authStore = useAuthStore()

  const login = async () => {
    try {
      const user = await LoginUseCase.execute(credentials)

      const { token } = user.toValue()

      authStore.setToken(token)

      alertSuccess('Login success !')

      router.push({ name: 'Dashboard' })
    } catch (error) {
      alertError(error as Error, { position: POSITION.TOP_CENTER })
      console.log(error)
    }
  }

  return {
    login,
    credentials,
    loginSchema,
  }
}
