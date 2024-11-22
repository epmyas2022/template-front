import { LoginUseCase } from '@/provider'
import { loginSchema } from '../validation/login.schema'
import { reactive } from 'vue'

export function useLogin() {
  const credentials = reactive({
    username: '',
    password: '',
  })

  const login = async () => {
    try {
      const user = await LoginUseCase.execute(credentials)

      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    login,
    credentials,
    loginSchema,
  }
}
