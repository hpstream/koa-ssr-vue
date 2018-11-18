const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const path = require('path');

module.exports = merge(base, {
    target: 'node',
    entry: './client/src/entry-client.js',
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new VueSSRServerPlugin()
    ]
})