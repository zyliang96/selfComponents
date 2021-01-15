const path = require('path')
module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve('src'),
    }
  }
}
