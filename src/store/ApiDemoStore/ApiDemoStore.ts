import { defineStore } from 'pinia'
import { getProducts, IProduct } from '@/api/shop'

export const useMainStore = defineStore('main', {
  state: () => ({
    name: 'jack',
    age: 18
  })
})

export const useShopStore = defineStore('shopStore', {
  state: () => ({
    Products: [] as IProduct[] // 注意类型的写法
  }),

  actions: {
    // 注意也是异步的写法
    async loadShopStore() {
      const res = await getProducts()
      this.Products = res
    }
  }
})
