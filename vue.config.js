// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'examples/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  productionSourceMap: false, // 生产环境 sourceMap
  devServer: {
    open: true,
    host: 'localhost',
    port: '8086',
    https: false
  },
  chainWebpack: config => {
    // image
    const imagesRule = config.module.rule('images')
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude
      .end()
    config.entry('polyfill').add('@babel/polyfill')
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
