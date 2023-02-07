import { hanRequest } from '../index'
import { IRootObject, IData } from './types'

enum ContrastAPI {
  test = '/test.json'
}

export function contrastRequest() {
  return hanRequest.get<IRootObject>({
    url: ContrastAPI.test
  })
}
