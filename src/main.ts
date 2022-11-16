import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'normalize.css'
import './assets/css/index.less'

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// 网络请求demo
import brRequest from './service/index'
import { DataType } from './service/request/type'

createApp(App).use(pinia).use(router).mount('#app')

// brRequest
//   .request<DataType>({
//     url: '/test.json',
//     showLoading: true,
//     interceptors: {
//       rquestInterceptor: (config) => {
//         console.log('单独请求的config拦截')
//         return config
//       },
//       responseInterceptor: (res) => {
//         console.log('单独请求的res拦截')
//         return res
//       }
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.status)
//     console.log(res.statusText)
//   })

import axios from 'axios'

axios
  .request({
    url: 'http://localhost:8085/test.json',
    method: 'get'
  })
  .then((res) => {
    console.log(res.data)
  })
