export const TYPES = {
  // Domain
  AUTH_REPOSITORY: Symbol.for('AuthRepository'),
  LOGIN_USER_USE_CASE: Symbol.for('LoginUserUseCase'),
  CRYPT_SERVICE: Symbol.for('CryptService'),
  VERIFY_USER_USE_CASE: Symbol.for('VerifyUserUseCase'),

  // External dependencies
  DEPENDENCY_VALIDATION: Symbol.for('DependencyValidation'),
}

export type User = {
  id: number
  name: string
  username: string
}

export type Auth = {
  user: User | null
  token: string | null
  isLoggedIn: boolean
}
