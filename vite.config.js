import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Ruta base para GitHub Pages: https://birira.github.io/AbejasUrbanas/
  base: '/AbejasUrbanas/',
  plugins: [react()],
})
