// 作用：把后端返回的菜单数据转换成路由数据
// 思路：1.遍历菜单，先加载默认所有routes
//     2.根据菜单获取的需要添加routes

// RouteRecordRaw是vue-router的类型，用来描述路由的
import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1.遍历菜单，先加载默认所有routes
  const allRoutes: RouteRecordRaw[] = []
  // 遍历所有，不用一个个导入. require.context()是webpack的api，可以动态加载文件
  // 参数1：目录，参数2：是否遍历子目录，参数3：匹配文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // console.log(key) eg:./analysis/analysis.ts
    const route = require('../router/main' + key.split('.')[1])
    // console.log(route.default)
    allRoutes.push(route.default)
    // console.log(allRoutes)
  })

  // 2.根据菜单获取的需要添加routes
  // 分析userMenus,不能直接取url，要用递归判断有无子菜单
  // type === 1 -> children -> type ===1 -> chidren ....
  // type === 2 -> url -> route

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        // find()方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
