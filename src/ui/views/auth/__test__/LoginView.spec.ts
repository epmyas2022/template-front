import { render, fireEvent, screen, cleanup, waitFor } from '@testing-library/vue'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import LoginView from '../LoginView.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('LoginView', () => {
  vi.mock('vue-router', () => ({
    useRouter: () => ({
      push: vi.fn(),
    }),
  }))

  const mocks = vi.hoisted(() => ({
    alertSuccess: vi.fn(),
    alertError: vi.fn(),
  }))

  vi.mock('@/helpers/utils', () => ({
    alertSuccess: mocks.alertSuccess,
    alertError: mocks.alertError,
  }))

  beforeEach(() => {
    setActivePinia(createPinia())
    cleanup()
    vi.clearAllMocks()
  })

  test('should attempt to login error of fields', async () => {
    render(LoginView)

    const username = screen.getByPlaceholderText('Username')

    expect(username).toBeDefined()

    await fireEvent.update(username, 'admin')

    const submit = screen.getByRole('button', { name: /Login/i })

    expect(submit).toBeDefined()

    await fireEvent.click(submit)

    await screen.findByText('password is a required field')
  })

  test('should attempt to login success', async () => {
    render(LoginView)

    const username = screen.getByPlaceholderText('Username')

    expect(username).toBeDefined()

    await fireEvent.update(username, 'admin')

    const password = screen.getByPlaceholderText('Password')

    expect(password).toBeDefined()

    await fireEvent.update(password, 'admin123')

    const submit = screen.getByRole('button', { name: /Login/i })

    expect(submit).toBeDefined()

    await fireEvent.click(submit)

    await waitFor(() => {
      expect(mocks.alertSuccess).toHaveBeenCalledWith('Login success !')
    })
  })

  test('should attempt to login error of credentials', async () => {
    render(LoginView)

    const username = screen.getByPlaceholderText('Username')

    expect(username).toBeDefined()

    await fireEvent.update(username, 'admin')

    const password = screen.getByPlaceholderText('Password')

    expect(password).toBeDefined()

    await fireEvent.update(password, 'admin1234')

    const submit = screen.getByRole('button', { name: /Login/i })

    expect(submit).toBeDefined()

    await fireEvent.click(submit)

    await waitFor(() => {
      expect(mocks.alertError).toHaveBeenCalled()
    })
  })
})
