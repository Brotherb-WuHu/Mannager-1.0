import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义拦截器的类型
export interface BrInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 定义封装的请求类型
export interface BrRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: BrInterceptors<T>
  showLoading?: boolean
}

// 定义请求结果res的类型
export interface DataType {
  data: any
  status: number
  statusText: string
}
