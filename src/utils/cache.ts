// 选择类是因为它的封装性更好
class CacheMethods {
  // 因为保存的东西很多样，所以用any
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)

    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

// 注意是直接导出实例，因为要直接用
export default new CacheMethods()
