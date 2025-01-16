import type { PrimitivePath } from '../user/entities/path.entity'
import type { PrimitiveUser } from '../user/entities/user.entity'

export const TYPES = {
  // Domain
  AUTH_REPOSITORY: Symbol.for('AuthRepository'),
  LOGIN_USER_USE_CASE: Symbol.for('LoginUserUseCase'),
  VERIFY_USER_USE_CASE: Symbol.for('VerifyUserUseCase'),
  PATHS_USER_USE_CASE: Symbol.for('PathsUserUseCase'),

  // External dependencies
  DEPENDENCY_VALIDATION: Symbol.for('DependencyValidation'),
}

export type Auth = {
  user: PrimitiveUser | Partial<PrimitiveUser>
  paths: PrimitivePath[] | []
  token: string | null
  isLoggedIn: boolean
}

export interface HttpClient {
  get(url: string, data: unknown, config?: object): Promise<unknown>
  post(url: string, data: unknown, config?: object): Promise<unknown>
  delete(url: string, config?: object): Promise<unknown>
  update(url: string, data: unknown, config?: object): Promise<unknown>
  patch(url: string, data: unknown, config?: object): Promise<unknown>
}
