import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      port: 3000,
      strictPort: true,
  },
  resolve: {
    alias: {
      // => Caminhos Principais
      '@css': path.resolve(__dirname, './src/css'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@imports': path.resolve(__dirname, './src/imports'),
    }
  }
})
