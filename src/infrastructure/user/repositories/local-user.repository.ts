import { Injectable } from '@/dependencies/injectable'
import { User } from '@/domain/user/entities/user.entity'
import { UserRespository } from '@/domain/user/repositories/user.repository'

@Injectable()
export class LocalUserRepository implements UserRespository {
  async find(id: number): Promise<User> {
    const user = User.create({
      id,
      name: 'John Doe',
      username: 'admin',
      password: '123456',
    })
    return Promise.resolve(user)
  }
}
