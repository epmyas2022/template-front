import { Inject } from '@/dependencies/inject'
import { Injectable } from '@/dependencies/injectable'
import { TYPES } from '@/domain/shared/types'
import { UseCase } from '@/domain/shared/use-case'
import { User } from '@/domain/user/entities/user.entity'
import { UserRespository } from '@/domain/user/repositories/user.repository'
import type { CryptService } from '@/domain/services/crypt.service'
import type { LoginUserDto } from './login-user.dto'
import { LoginValidation } from './login.validation'

@Injectable()
export class LoginUserUseCase extends UseCase<User, LoginUserDto> {
  public constructor(
    @Inject(TYPES.USER_REPOSITORY)
    private readonly userRepository: UserRespository,
    @Inject(TYPES.CRYPT_SERVICE)
    private readonly cryptService: CryptService,
  ) {
    super()
  }

  async execute(loginUserDto: LoginUserDto): Promise<User> {

    LoginValidation.validate(loginUserDto)

    const user = await this.userRepository.find(1)

    if (!user) throw new Error('User not found')

    const isValidPassword = await this.cryptService.compare(loginUserDto.password, user.password)

    if (!isValidPassword) throw new Error('Invalid password')

    return user
  }
}
