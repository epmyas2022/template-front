import 'reflect-metadata'
import { Container as InversifyContainer, type interfaces } from 'inversify'
import { LocalUserRepository } from './infrastructure/user/repositories/local-user.repository'
import { LoginUserUseCase } from './application/auth/login-user-use-case'
import { CryptService } from './domain/services/crypt.service'
import { AuthCryptService } from './infrastructure/user/services/auth-crypt.service'
import { TYPES } from './domain/shared/types'
import { UserRespository } from '@/domain/user/repositories/user.repository'

export class Container {
  private static _instance: Container | null = null
  private readonly container: InversifyContainer

  private constructor() {
    this.container = new InversifyContainer()
    this.register<UserRespository>(TYPES.USER_REPOSITORY, LocalUserRepository)
    this.register<LoginUserUseCase>(TYPES.LOGIN_USER_USE_CASE, LoginUserUseCase)
    this.register<CryptService>(TYPES.CRYPT_SERVICE, AuthCryptService)
  }

  public static getInstance(): Container {
    if (!Container._instance) {
      Container._instance = new Container()
    }
    return Container._instance
  }

  public get<T>(serviceIdentifier: symbol): T {
    return this.container.get<T>(serviceIdentifier)
  }

  public register<T>(serviceIdentifier: symbol, constructor: interfaces.Newable<T>): void {
    this.container.bind<T>(serviceIdentifier).to(constructor).inSingletonScope()
  }
}
