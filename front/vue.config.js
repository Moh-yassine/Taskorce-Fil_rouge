const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // Configuration du build
  publicPath: process.env.NODE_ENV === 'production' ? '/taskforce/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  
  // Configuration du serveur de développement
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  
  // Configuration de production
  productionSourceMap: false,
  
  // Configuration CSS
  css: {
    extract: process.env.NODE_ENV === 'production',
    sourceMap: process.env.NODE_ENV === 'development'
  },
  
  // Configuration des plugins
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: 5,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      }
    }
  },
  
  // Configuration des alias
  chainWebpack: config => {
    config.resolve.alias
      .set('@', require('path').resolve(__dirname, 'src'))
      .set('@components', require('path').resolve(__dirname, 'src/components'))
      .set('@views', require('path').resolve(__dirname, 'src/views'))
      .set('@assets', require('path').resolve(__dirname, 'src/assets'))
      .set('@utils', require('path').resolve(__dirname, 'src/utils'))
    
    // Configuration pour le build de production
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimize(true)
      config.optimization.minimizer('terser').tap(args => {
        args[0].terserOptions.compress.drop_console = true
        args[0].terserOptions.compress.drop_debugger = true
        return args
      })
    }
  }
})
