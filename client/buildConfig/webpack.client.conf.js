// webpack.client.config.js
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
    entry: {
        app: './client/src/entry-client.js'
    },
    optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'all'
        }
      },
    plugins: [
        new VueSSRClientPlugin()
    ]
})