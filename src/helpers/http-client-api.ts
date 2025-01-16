import type { HttpClient } from '@/domain/shared/types'
import { Http, type HttpInstance } from '@/dependencies/http'
import {
  errorRequestInterceptor,
  responseRequestInterceptor,
} from './interceptors/request.interceptor'
import { responseInterceptor } from './interceptors/response.interceptor'

export class HttpClientApi implements HttpClient {
  private readonly httpInstance: HttpInstance

  constructor() {
    this.httpInstance = Http.default.create({
      baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:8000',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    this.httpInstance.interceptors.request.use(responseRequestInterceptor, errorRequestInterceptor)
    this.httpInstance.interceptors.response.use(responseInterceptor, errorRequestInterceptor)
  }

  get<T>(url: string, data: unknown, config?: object): Promise<T> {
    return this.httpInstance.get(url, { params: data, ...config })
  }
  post(url: string, data: unknown, config?: object): Promise<unknown> {
    return this.httpInstance.post(url, data, config)
  }
  delete(url: string, config?: object): Promise<unknown> {
    return this.httpInstance.delete(url, config)
  }
  update(url: string, data: unknown, config?: object): Promise<unknown> {
    return this.httpInstance.put(url, data, config)
  }
  patch(url: string, data: unknown, config?: object): Promise<unknown> {
    return this.httpInstance.patch(url, data, config)
  }
}
