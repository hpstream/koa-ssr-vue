const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
      rules:[
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
      ]
    }
};