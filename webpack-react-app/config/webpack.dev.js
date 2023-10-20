const webpack = require('webpack')
const {merge} = require('webpack-merge')

const commonConfig = require('./webpack.common')

const devConfig = merge(commonConfig, {
    mode: 'development',
    devServer: {// webpack-dev-server
        port: '7777',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    devtool: "cheap-module-source-map",
})

module.exports = devConfig