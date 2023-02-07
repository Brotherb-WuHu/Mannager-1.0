import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'normalize.css'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
import { setupStore } from '@/store/login/login'

// 网络请求demo

const app = createApp(App)
app.use(pinia).use(router).mount('#app')

// el-plus icon 全注册

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 解决用户登录后刷新，缓存还在，store清空的问题
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
