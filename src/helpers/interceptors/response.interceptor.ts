import type { HttpError, ResponseConfig } from '@/dependencies/http'
import { httpErrorMessages } from './http-code'

export function errorResponseInterceptor(error: HttpError) {
  const status = error.response?.status as keyof typeof httpErrorMessages

  console.log(httpErrorMessages[status || 500])

  console.log('errorResponseInterceptor', error)
}

export function responseInterceptor(response: ResponseConfig): ResponseConfig {
  console.log('responseResponseInterceptor', response)

  return response
}
