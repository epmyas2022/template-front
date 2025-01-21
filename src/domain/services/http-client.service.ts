export abstract class HttpClientService {
  abstract get<T, D>(url: string, data: D, config?: object): Promise<T>
  abstract post<T, D>(url: string, data: D, config?: object): Promise<T>
  abstract delete<T>(url: string, config?: object): Promise<T>
  abstract update<T, D>(url: string, data: D, config?: object): Promise<T>
  abstract patch<T, D>(url: string, data: D, config?: object): Promise<T>
}
