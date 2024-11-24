import { Container } from './helpers/container'
import { LocalUserRepository } from './infrastructure/user/repositories/local-user.repository'
import { LoginUserUseCase } from './application/auth/login-user-use-case'
import { CryptService } from './domain/services/crypt.service'
import { AuthCryptService } from './infrastructure/user/services/auth-crypt.service'
import { TYPES } from './domain/shared/types'
import { UserRespository } from '@/domain/user/repositories/user.repository'

const container = Container.register<UserRespository>(TYPES.USER_REPOSITORY, LocalUserRepository)
  .register<LoginUserUseCase>(TYPES.LOGIN_USER_USE_CASE, LoginUserUseCase)
  .register<CryptService>(TYPES.CRYPT_SERVICE, AuthCryptService)
  .getInstance()

export const LoginUseCase = container.get<LoginUserUseCase>(TYPES.LOGIN_USER_USE_CASE)
