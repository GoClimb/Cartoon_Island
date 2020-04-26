module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },

      '/maizuo': {
        target: 'https://m.maizuo.com',
        changeOrigin: true,
        pathRewrite: {
          '^/maizuo': ''
        }
      }
    }
  }
}
