import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount, IPhone } from '@/views/login/config/types'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    // 如果以Promise的形式拿结果会出现多层嵌套,所以我们可以使用 async/await
    // 如：accountLoginRequest(account).then(res => {}) 会出现多层嵌套

    async accountLoginAction(account: IAccount) {
      console.log('执行 accountLoginAction', account)
      /* 1.登录请求，保存 token和id */
      // 关于 loginRequest 的类型，我们要在 accountLoginRequest 里封装的.post传类型
      const loginRequest = await accountLoginRequest(account)
      const { id, token } = loginRequest.data
      this.token = token
      // token缓存
      localCache.setCache('token', token)

      /*2.根据id请求用户信息 */
      const userInfoRequest = await requestUserInfoById(id)
      const userInfo = userInfoRequest.data
      this.userInfo = userInfo
      // 用户信息缓存
      localCache.setCache('userInfo', userInfo)

      /*3.根据不同用户的角色，请求不一样的菜单 */
      // 这里需要用到api：高级请求 - 查询角色菜单树

      const userMenusRequest = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusRequest.data
      this.userMenus = userMenus
      // 用户菜单缓存
      localCache.setCache('userMenus', userMenus)

      /*4.路由跳转到首页 */
      // 关于其他已经登录和未登录的重定向问题，是在router的导航守卫里面解决的哦
      router.push('/main')
    },

    phoneLoginAction(phone: IPhone) {
      console.log('执行 phoneLoginAction ', phone)
    },

    // 刷新后如果已经登录，从缓存中拿取数据放回store中
    loadLocalLogin() {
      const token = localCache.getCache('token')
      if (token) {
        this.token = token
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        this.userInfo = userInfo
      }

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        this.userMenus = userMenus
        // 动态添加路由
        const routes = mapMenusToRoutes(userMenus)
        // console.log('routes', routes)
        // 将筛选过的，与菜单匹配的路由，添加到main路由下
        routes.forEach((route) => {
          router.addRoute('main', route)
        })
      }
    }
  }
})

// 解决用户登录后刷新，缓存还在，store清空的问题
// 即在app注册的后面，调用setupStore方法，让每次启动都从缓存拿一次数据
export function setupStore() {
  const LoginStore = useLoginStore()

  LoginStore.loadLocalLogin()
}
