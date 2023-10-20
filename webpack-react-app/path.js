const path = require("path");

const rootPath = path.resolve(__dirname)
const staticPath = path.resolve(rootPath, 'static')
const publicHtmlPath = path.resolve(staticPath, 'index.html')
const buildPath = path.resolve(rootPath, 'dist') 

module.exports = {
    rootPath,
    buildPath,
    publicHtmlPath,
}