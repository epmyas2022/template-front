import { TYPES } from './domain/shared/types'
import { Container } from './container'
import { LoginUserUseCase } from './application/auth/login-user-use-case'

export const LoginUseCase = Container.getInstance().get<LoginUserUseCase>(TYPES.LOGIN_USER_USE_CASE)
