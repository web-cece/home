let path = require("path")
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'home.js',
        path: path.resolve(__dirname, 'home')
    }
}