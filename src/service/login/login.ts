import { brRequest } from '../index'
import { IAccount } from '../../views/login/config/types'
import { IDataType, ILoginResult, UserInfo } from './types'

// 我们登录的 url可能有很多样，还是建议放在统一的地方方便修改,这里就可以用 枚举类型 来定义
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法eg : /users/1
  UserMenus = '/role/' // 用法eg：/role/1/menu
}

/* 我们封装.post的时候预留了泛型来给返回结果的data定义类型，因此要手动传类型来确定返回的类型 */
export function accountLoginRequest(account: IAccount) {
  return brRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return brRequest.get<IDataType<UserInfo>>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  // Manus 的类型就不写了，偷懒
  return brRequest.get<IDataType<any>>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
