
const { resolve } = require('path')

module.exports = {
    base: "./",
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
       
      }
    }
  } 
}