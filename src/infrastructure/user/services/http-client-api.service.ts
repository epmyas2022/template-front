import { Http, type HttpInstance } from '@/dependencies/http'
import {
  errorRequestInterceptor,
  responseRequestInterceptor,
} from '@/helpers/interceptors/request.interceptor'
import { responseInterceptor } from '@/helpers/interceptors/response.interceptor'
import type { HttpClientService } from '@/domain/services/http-client.service'
import { Injectable } from '@/dependencies/injectable'

@Injectable()
export class HttpClientApiService implements HttpClientService {
  private readonly httpInstance: HttpInstance

  constructor() {
    this.httpInstance = Http.default.create({
      baseURL: import.meta.env.VITE_BASE_URL || 'http://127.0.0.1:8000',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    this.httpInstance.interceptors.request.use(responseRequestInterceptor, errorRequestInterceptor)
    this.httpInstance.interceptors.response.use(responseInterceptor, errorRequestInterceptor)
  }
  get<T, D>(url: string, data: D, config?: object): Promise<T> {
    return this.httpInstance.get(url, { params: data, ...config })
  }
  post<T, D>(url: string, data: D, config?: object): Promise<T> {
    return this.httpInstance.post(url, data, config)
  }
  delete<T>(url: string, config?: object): Promise<T> {
    return this.httpInstance.delete(url, config)
  }
  update<T, D>(url: string, data: D, config?: object): Promise<T> {
    return this.httpInstance.put(url, data, config)
  }
  patch<T, D>(url: string, data: D, config?: object): Promise<T> {
    return this.httpInstance.patch(url, data, config)
  }
}
