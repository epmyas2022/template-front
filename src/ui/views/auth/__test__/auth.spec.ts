import { describe, test, expect } from 'vitest'
import { LoginUseCase } from '@/provider'

describe('Auth', () => {
  test('should failed login user', async () => {
    await expect(async () => {
      await LoginUseCase.execute({ username: 'admin', password: 'admin1234' })
    }).rejects.toThrow('Invalid username or password')
  })

  test('should success login user', async () => {
    const user = await LoginUseCase.execute({ username: 'admin', password: 'admin123' })
    expect(user.token).toBeDefined()
  })
})
