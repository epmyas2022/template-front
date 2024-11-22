import type { CryptService } from '@/domain/services/crypt.service'
import { Bcrypt } from '@/dependencies/bcrypt'
export class AuthCryptService implements CryptService {
  async hash(password: string): Promise<string> {
    return Bcrypt.hash(password, 10)
  }
  compare(password: string, hash: string): Promise<boolean> {
    return Bcrypt.compare(password, hash)
  }
}
