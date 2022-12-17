import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'normalize.css'
import './assets/css/index.less'

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
import { setupStore } from '@/store/login/login'

// 网络请求demo
createApp(App).use(pinia).use(router).mount('#app')

setupStore()

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
