const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const packageName = require('../package.json').name;
const { publicHtmlPath, buildPath } = require('../path')
const JS_NAME = 'js/[name].js'
const CSS_NAME = 'css/[name].css'

module.exports = {
    entry: {
        [packageName]: './index.js'
    },
    output: {
        filename: JS_NAME,
        path: buildPath,
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
        chunkLoadingGlobal: `webpackJsonp_${packageName}`,
        library: `${packageName}-[name]`,
        libraryTarget: 'umd'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                },
                exclude: /node_modules/
            },
            {
                test: /\.(svg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: publicHtmlPath, inject: 'body' }),
        new MiniCssExtractPlugin({filename: CSS_NAME}),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            maxInitialRequests: 5,
            cacheGroups: {
                //提取src代码
                common: {
                    name: 'chunk-common',
                    test: /[\\/]src[\\/]/,
                    //可选值有 async、 initial 和 all。
                    //默认值是 async，也就是默认只选取异步加载的chunk进行代码拆分。
                    //initial 也就是默认同步加载的代码
                    //all 上述两种情况都涵盖
                    chunks: 'all',
                    // 拆分前必须共享模块的最小 chunks 数,也就当前的文件被1个以上的文件引用时才拆分
                    minChunks: 1,
                    //生成 chunk 的最小体积（以 bytes 为单位）
                    minSize: 0, 
                    //一个模块可以属于多个缓存组。优化将优先考虑具有更高 priority（优先级）的缓存组
                    priority: 1,
                },
                //分割node包代码
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: 2,
                },
            },
        },
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   },
}