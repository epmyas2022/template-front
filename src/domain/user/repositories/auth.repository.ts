import type { Login } from '../entities/login.entity'
import type { User } from '../entities/user.entity'

export abstract class AuthRespository {
  abstract login(username: string, password: string): Promise<Login | { error: string }>

  abstract verify(): Promise<User | { error: string }>
}
