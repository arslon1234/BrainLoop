import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  optimizeDeps: {
    include: ['@monaco-editor/react']
  },
  resolve: {
    alias: [
      { find: "@", replacement: "/src/*" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@widgets", replacement: "/src/widgets" },
      { find: "@shared", replacement: "/src/shared" },
    ],
  },
})
