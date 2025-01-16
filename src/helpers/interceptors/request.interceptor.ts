import type { InternalRequestConfig, RequestConfig } from '@/dependencies/http'

export function errorRequestInterceptor(config: RequestConfig) {
  console.log('errorRequestInterceptor', config)
}

export function responseRequestInterceptor(config: InternalRequestConfig): InternalRequestConfig {
  console.log('responseRequestInterceptor', config)

  return config
}
