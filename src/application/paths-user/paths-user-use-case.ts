import { Inject } from '@/dependencies/inject'
import { Injectable } from '@/dependencies/injectable'
import { TYPES } from '@/domain/shared/types'
import { UseCaseSingle } from '@/domain/shared/use-case'
import type { PrimitivePath } from '@/domain/user/entities/path.entity'
import type { AuthRespository } from '@/domain/user/repositories/auth.repository'

@Injectable()
export class PathsUserUseCase extends UseCaseSingle<PrimitivePath[]> {
  constructor(
    @Inject(TYPES.AUTH_REPOSITORY)
    private readonly authRepository: AuthRespository,
  ) {
    super()
  }
  async execute(): Promise<PrimitivePath[]> {
    const paths = await this.authRepository.paths()

    if ('error' in paths) throw new Error(paths.error)

    if (paths.length === 0) throw new Error('Paths not found for this user')

    return paths.map((path) => path.toValue())
  }
}
