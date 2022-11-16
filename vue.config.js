// vue.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  lintOnSave: false, // 关闭语法检查
  publicPath: './', // 部署应用包时的基本 URL
  outputDir: 'dist', // 打包后的目录
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        components: '@/components',
        views: '@/views',
        network: '@/network',
        assets: '@/assets',
        common: '@/common'
      }
    }
  }
}
