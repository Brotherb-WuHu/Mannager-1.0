export interface Word {
  id: number
  position: number[]
  original: string
  result: string
}

export interface Lack {
  id: number
  position: number[]
  original: string
  result: string
}

export interface Redund {
  id: number
  position: number[]
  original: string
  result: string
}

export interface BlackList {
  id: number
  position: number[]
  cur: any[] // 初版文档没说，缺省
  original: string
  result: string
}

export interface CorrectList {
  words: Word[]
  blackList: BlackList[]
  lack: Lack[]
  redund: Redund[]
}

export interface IData {
  count: number
  correctList: CorrectList
}

export interface IRootObject {
  flag: boolean
  code: number
  desc: string
  data: IData
}
