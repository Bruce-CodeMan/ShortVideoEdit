/*
 * @Date: 2023-08-22 15:24:05
 * @Author: Bruce Hsu
 * @Description: 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{
      find: "@",
      replacement: path.resolve(__dirname, "src")
    }]
  }
})
