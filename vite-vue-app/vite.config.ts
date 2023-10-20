import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy' // need this
import { legacyQiankun } from 'vite-plugin-legacy-qiankun'
import { name } from './package.json'

const SERVER_PORT = 8888

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    legacyQiankun({
      name: name,
      devSandbox: true  
    }),
  ],
  server: {
    port: SERVER_PORT,
    origin: 'http://127.0.0.1:'+SERVER_PORT,// 定义开发调试阶段生成资源的 origin, 微前端情况下当做写死的public_path
    headers: {
      'Access-Control-Allow-Origin': '*', // 主应用获取子应用时跨域响应头
    },
  },
  preview: {
    port: SERVER_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*', // 主应用获取子应用时跨域响应头
    },
  },
})
