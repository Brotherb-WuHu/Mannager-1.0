import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', {
  state: () => ({
    count: 1,
    banners: [],
    recommmends: []
  }),

  actions: {
    // 1.action 基本使用
    increment() {
      this.count++
    },

    incrementNum(num: number) {
      this.count += num
    },

    // 2.异步acHtion

    // async 和 await 关键字让我们可以用一种更简洁的方式写出基于 Promise 的异步行为，而无需刻意地链式调用 promise。

    // async 函数会返回一个 Promise 对象，可以使用 then 方法添加回调函数。当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。
    async fetchHomeMultidata() {
      const res = await fetch('http://123.207.32.32:8000/home/multidata')
      const data = await res.json()

      this.banners = data.data.banner.list
      this.recommmends = data.data.recommend.list

      // 返回不一定要写,写了的话可以被调用的 then 拿到
      // 相当于 return Promise.resolve(data)
      return data
    },

    // 下面就是完全版的写法(不推荐)
    fetchHomeMultidataPromise() {
      return new Promise(async (resolve, reject) => {
        const res = await fetch('http://123.207.32.32:8000/home/multidata')
        const data = await res.json()

        this.banners = data.data.banner.list
        this.recommmends = data.data.recommend.list

        resolve(data)
      })
    }
  }
})
