module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        // '@' 默认为'src',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
