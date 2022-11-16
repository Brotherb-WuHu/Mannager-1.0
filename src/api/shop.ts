export interface IProduct {
  id: number
  title: string
  price: number
  inventory: number // 库存
}

const _products: IProduct[] = [
  { id: 1, title: 'ipad 2020', price: 3000, inventory: 3 },
  { id: 2, title: 'iphone 14', price: 8000, inventory: 1 },
  { id: 3, title: 'xioami pro plus', price: 5000, inventory: 5 },
  { id: 4, title: 'huawei mate 60 pro', price: 9000, inventory: 10 }
]

export const getProducts = async () => {
  await wait(500)
  return _products
}

// 封装了延迟，返回的是promise
async function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
