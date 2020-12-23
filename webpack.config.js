const path = require('path')

module.exports = {
    entry: './src/index.js', // This is default value, you do not have to set this
    output: {
        path: path.resolve(__dirname, 'dist'),  // This is of course again
        filename: 'main.js'                     // defualt value
    }
};