import { Injectable } from '@/dependencies/injectable'
import { AuthRespository } from '@/domain/user/repositories/auth.repository'
import { Login } from '@/domain/user/entities/login.entity'
import { User } from '@/domain/user/entities/user.entity'

@Injectable()
export class LocalAuthRepository implements AuthRespository {
  async verify(): Promise<User | { error: string }> {
    return new User({
      id: 1,
      username: 'admin',
      name: 'Admin',
      password: 'admin123',
    })
  }
  async login(username: string, password: string): Promise<Login | { error: string }> {
    if (username === 'admin' && password === 'admin123') {
      return new Login({
        token: 'token',
        refreshToken: 'refreshToken',
      })
    }

    return { error: 'Invalid username or password' }
  }
}
