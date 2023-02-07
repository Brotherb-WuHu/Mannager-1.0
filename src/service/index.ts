// index.ts 是 service 统一的出口
import BrRequest from './request'
import {
  BASE_URL_WHY,
  TIME_OUT_WHY,
  BASE_URL_HAN,
  TIME_OUT_HAN
} from './request/config'
import localCache from '@/utils/cache'

export const brRequest = new BrRequest({
  baseURL: BASE_URL_WHY,
  timeout: TIME_OUT_WHY,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        // 本来axios的headers是直接给any的，但后面改了，要麻烦一点
        if (config && config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    }
  }
})

export const hanRequest = new BrRequest({
  baseURL: BASE_URL_HAN,
  timeout: TIME_OUT_HAN
})

// export default brRequest
