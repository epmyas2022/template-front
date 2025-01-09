import { Inject } from '@/dependencies/inject'
import { Injectable } from '@/dependencies/injectable'
import { TYPES } from '@/domain/shared/types'
import { UseCaseSingle } from '@/domain/shared/use-case'
import type { User } from '@/domain/user/entities/user.entity'
import type { AuthRespository } from '@/domain/user/repositories/auth.repository'

@Injectable()
export class VerifyUserUseCase extends UseCaseSingle<User> {
  public constructor(
    @Inject(TYPES.AUTH_REPOSITORY)
    private readonly authRepository: AuthRespository,
  ) {
    super()
  }
  async execute(): Promise<User> {
    const user = await this.authRepository.verify()

    if ('error' in user) throw new Error(user.error)

    return user
  }
}
