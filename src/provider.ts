import { Container } from './helpers/container'
import { LocalAuthRepository } from './infrastructure/user/repositories/local-auth.repository'
import { LoginUserUseCase } from './application/auth/login-user-use-case'
import { TYPES } from './domain/shared/types'
import { AuthRespository } from '@/domain/user/repositories/auth.repository'
import { VerifyUserUseCase } from '@/application/verify-user/verify-user-use-case'
import { PathsUserUseCase } from './application/paths-user/paths-user-use-case'

const container = Container
  // Register dependencies
  .register<AuthRespository>(TYPES.AUTH_REPOSITORY, LocalAuthRepository)

  // Auth
  .register<LoginUserUseCase>(TYPES.LOGIN_USER_USE_CASE, LoginUserUseCase)
  .register<VerifyUserUseCase>(TYPES.VERIFY_USER_USE_CASE, VerifyUserUseCase)
  .register<PathsUserUseCase>(TYPES.PATHS_USER_USE_CASE, PathsUserUseCase)

  .getInstance()

export const LoginUseCase = container.get<LoginUserUseCase>(TYPES.LOGIN_USER_USE_CASE)
export const VerifyAuthUseCase = container.get<VerifyUserUseCase>(TYPES.VERIFY_USER_USE_CASE)
export const PathsUseCase = container.get<PathsUserUseCase>(TYPES.PATHS_USER_USE_CASE)
