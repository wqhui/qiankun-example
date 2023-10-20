const webpack = require('webpack')
const {merge} = require('webpack-merge')

const commonConfig = require('./webpack.common')

const prodConfig = merge(commonConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
    optimization: {
        //runtimeChunk: 'single',
        //只导出被引用的变量
        usedExports: true,
        //尽可能合并模块到一个函数中
        concatenateModules: true,
        // TerserPlugin 或其它在 optimization.minimizer定义的插件压缩 bundle。
        minimize: true,
        //sideEffects: true,
    },
})

module.exports = prodConfig