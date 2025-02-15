import { DtoException } from '@/domain/shared/exceptions/dto.exception'
import type { LoginUserDto } from './login-user.dto'

export class LoginValidation {
  private constructor(private readonly value: LoginUserDto) {
    if (!this.value.username || this.value.username === '')
      throw new DtoException('Username is required')

    if (!this.value.password || this.value.password === '')
      throw new DtoException('Password is required')

    this.minPassword(6)
    this.maxPassword(20)
  }

  private minPassword(min: number) {
    if (this.value.password.length < min)
      throw new DtoException(`Password must be at least ${min} characters long`)
  }

  private maxPassword(max: number) {
    if (this.value.password.length > max)
      throw new DtoException(`Password must be at most ${max} characters long`)
  }

  static validate(value: LoginUserDto): LoginValidation {
    return new LoginValidation(value)
  }
}
