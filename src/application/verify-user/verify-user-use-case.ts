import { Inject } from '@/dependencies/inject'
import { Injectable } from '@/dependencies/injectable'
import { TYPES } from '@/domain/shared/types'
import { UseCaseSingle } from '@/domain/shared/use-case'
import type { User } from '@/domain/user/entities/user.entity'
import type { UserRespository } from '@/domain/user/repositories/user.repository'

@Injectable()
export class VerifyUserUseCase extends UseCaseSingle<User> {
  public constructor(
    @Inject(TYPES.USER_REPOSITORY)
    private readonly userRepository: UserRespository,
  ) {
    super()
  }
  async execute(): Promise<User> {
    const user = await this.userRepository.find(1)

    if (!user) throw new Error('User not found')

    return user
  }
}
