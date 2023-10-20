import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const SERVER_PORT = 9999

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: SERVER_PORT
  },
  preview: {
    port: SERVER_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*', // 主应用获取子应用时跨域响应头
    },
  },
})
