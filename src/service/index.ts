// index.ts 是 service 统一的出口
import BrRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

// import { createPinia } from 'pinia'
import { useLoginStore } from '@/store/login/login'

// const store = createPinia()
// const LoginStore = useLoginStore()

const brRequest = new BrRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
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

export default brRequest
