import { Inject } from '@/dependencies/inject'
import { Injectable } from '@/dependencies/injectable'
import type { CryptService } from '@/domain/services/crypt.service'
import { TYPES } from '@/domain/shared/types'
import { User } from '@/domain/user/entities/user.entity'
import { UserRespository } from '@/domain/user/repositories/user.repository'

@Injectable()
export class LocalUserRepository implements UserRespository {
  constructor(
    @Inject(TYPES.CRYPT_SERVICE)
    private readonly cryptService: CryptService,
  ) {}
  async find(id: number): Promise<User> {
    const password = await this.cryptService.hash('123456')
    const user = User.create({
      id,
      name: 'John Doe',
      username: 'admin',
      password,
    })
    return Promise.resolve(user)
  }
}
