// index.ts 是 service 统一的出口
import BrRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const brRequest = new BrRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default brRequest
