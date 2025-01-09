import { Inject } from '@/dependencies/inject'
import { Injectable } from '@/dependencies/injectable'
import { TYPES } from '@/domain/shared/types'
import { UseCase } from '@/domain/shared/use-case'
import { AuthRespository } from '@/domain/user/repositories/auth.repository'
import type { LoginUserDto } from './login-user.dto'
import { LoginValidation } from './login.validation'
import type { Login } from '@/domain/user/entities/login.entity'

@Injectable()
export class LoginUserUseCase extends UseCase<Login, LoginUserDto> {
  public constructor(
    @Inject(TYPES.AUTH_REPOSITORY)
    private readonly authRepository: AuthRespository,
  ) {
    super()
  }

  async execute(loginUserDto: LoginUserDto): Promise<Login> {
    LoginValidation.validate(loginUserDto)

    const { username, password } = loginUserDto

    const auth = await this.authRepository.login(username, password)

    if ('error' in auth) throw new Error(auth.error)

    return auth
  }
}
