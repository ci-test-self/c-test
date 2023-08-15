import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('ci-test')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
