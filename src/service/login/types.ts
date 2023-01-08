// 这里定义post后，接收的参数类型

export interface ILoginResult {
  id: number
  name: string
  token: string
}

//注意:用户信息的类型非常的多，如果一个个去写会很麻烦，想做推荐用json2ts插件来生成
//原始返回的格式找后端要，在vscode用插件的话，复制json后用 Shift+Alt+V
//但是！有些数据在是否可选是是有问题的，比如 createAt 和 updateAt 是可选的

// 这个信息类型还是简单的，更有其他更复杂的结构，所以是直接用any，还是像这样处理，自己选吧
export interface Role {
  id: number
  name: string
  intro: string
  createAt?: string
  updateAt?: string
}

export interface Department {
  id: number
  name: string
  parentId?: any
  createAt?: string
  updateAt?: string
  leader: string
}

export interface UserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt?: string
  updateAt?: string
  role: Role
  department: Department
}

// 接收的data类型不能写死，因为不同请求的结果data不一样
// 可以给泛型，默认是any
export interface IDataType<T = any> {
  code: number
  data: T
}
