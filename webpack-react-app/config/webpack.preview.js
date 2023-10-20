const webpack = require('webpack')
const {merge} = require('webpack-merge')

const { buildPath } = require('../path')
const prodConfig = require('./webpack.prod')

const previewConfig = merge(prodConfig, {
    devServer: {// webpack-dev-server
        static: {
            directory: buildPath,
        },
        port: '7777',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
})

module.exports = previewConfig