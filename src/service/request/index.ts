import axios from 'axios'
// 导入类型
import type { AxiosInstance } from 'axios'
import type { BrInterceptors, BrRequestConfig } from './type'
// 导入loading
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

const DEFAULT_LOADING = false

class BrRequest {
  instance: AxiosInstance
  interceptors?: BrInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: BrRequestConfig) {
    /* 创建axios实例 */
    this.instance = axios.create(config)
    /* 保存基本信息 */
    this.interceptors = config.interceptors
    // ?? false:当前面的为空或者undefined时改 为 false
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    /* 使用拦截器 */
    // 1.添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器: 请求成功的拦截')

        if (this.showLoading) {
          // LoadingService 会返回一个 Loading 实例，可通过调用该实例的 close 方法来关闭它：
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载中...',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }

        return config
      },
      (error) => {
        console.log('所有实例都有的拦截器: 请求失败的拦截')
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的拦截器: 响应成功的拦截')

        // 将 loading 移除
        setTimeout(() => {
          this.loading?.close()
        }, 3000)

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败,HttpErrorCode:-1001')
        } else {
          return res
        }
      },
      (err) => {
        console.log('所有实例都有的拦截器: 响应失败的拦截')

        // 将 loading 移除
        this.loading?.close()

        if (err.response.status === 404) {
          console.log('请求状态码404错误')
        }
        return err
      }
    )

    // 2.如果有自定义的拦截器，就使用它
    this.instance.interceptors.request.use(
      this.interceptors?.rquestInterceptor,
      this.interceptors?.rquestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  /* 通用请求方法 */
  request<T>(config: BrRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      /* 调用axios实例的 request 之前 */
      // 1.如果有自定义的请求拦截器，就使用
      if (config.interceptors?.rquestInterceptor) {
        config = config.interceptors.rquestInterceptor(config)
      }
      // 2.判断是否需要显示 loading
      if (config.showLoading === true) {
        this.showLoading = config.showLoading
      }

      /* 调用 axios 实例的 rquest */
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.将 showloading设置为 false，这样不会影响下一次请求
          this.showLoading = DEFAULT_LOADING

          // 3.将结果 resolve 返回出去,相当于调用了 then
          resolve(res)
        })
        .catch((err) => {
          // 2.将 showloading设置为 false，这样不会影响下一次请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: BrRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: BrRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: BrRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: BrRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default BrRequest
