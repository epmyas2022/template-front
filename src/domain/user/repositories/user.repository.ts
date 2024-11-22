import type { User } from '../entities/user.entity'

export abstract class UserRespository {
  abstract find(id: number): Promise<User> | null
}
