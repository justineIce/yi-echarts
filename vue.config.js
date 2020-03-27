module.exports={
    publicPath:'/',
    outputDir:'dist',
    pages:{
      index:{
          entry:'examples/main.js',
          template:'examples/index.html',
          filename: 'index.html',
          chunks: ['chunk-vendors', 'chunk-common', 'index']
      }
    },
    productionSourceMap:false,//生产环境 sourceMap
    devServer: {
        open:true,
        host:'localhost',
        port:'8086',
        https:false,
    }
}
