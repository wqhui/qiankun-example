import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const SERVER_PORT = 9999

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/home',
    port: SERVER_PORT,
  },
  preview:{
    open: '/home',
    port: SERVER_PORT
  }
})
